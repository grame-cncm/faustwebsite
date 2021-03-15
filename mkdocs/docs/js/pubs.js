
// ---------------------------------------------------------------------
// utilities
function getType(type) {
    switch (type) {
        case "ART":     return "Article";
        case "COMM":    return "Proceedings";
        case "THESE":   return "Thesis";
        case "REPORT":  return "Technical report";
        case "MEM":     return "Dissertation";
    }
    return null;
}

function makeEntry(content, type, classname) {
    if (!content) return "";
    let template = "<__TYPE__ class='__CLASS__'>__CONTENT__</__TYPE__>";
    return template.replace (/__TYPE__/g, type)
                    .replace("__CLASS__", classname)
                    .replace("__CONTENT__", content);
}

function makeHidden(content, type, classname, id, copy) {
    if (!content) return "";
    let template = "<__TYPE__ class=\"collapse __CLASS__\" id=\"__ID__\">__CONTENT__</__TYPE__>";
    return template.replace (/__TYPE__/g, type)
                    .replace("__CLASS__", classname)
                    .replace("__CONTENT__", content)
                    .replace("__ID__", id);
}

function makeButton(name, target) {
    return "<span class=\"proc-button pub_button\" data-toggle=\"collapse\" data-target=\"#" + target + "\">" + name + "</span>";
}

function makeLink(url, imgurl, width) {
    let template = "<a href=\"__URL__\" target=_blank><img src=__IMGURL__ alt='Download' class='pub_pdf' width=__WIDTH__></a>";
    return template.replace ("__URL__", url)
                    .replace ("__IMGURL__", imgurl)
                    .replace ("__WIDTH__", width);
}

// ---------------------------------------------------------------------
// generates a single paper 
function displayPaper(paper, index) {
    let proc = paper["proceedings_s"];
    let ptype = getType(paper["docType_s"]);
    let type = ptype ? makeEntry(" (" + ptype + ")", "span", "pub_type") : "";
    let abstractid = "ABS_" + index;
    let bibtexid   = "BIB_" + index;

    let url = paper["files_s"];
    let link = "";
    if (url && url.length) link = makeLink (url[0], "img/pdficon.gif", 35);
    else link = makeLink (paper["uri_s"], "img/HAL.png", 35);

    let titles = paper["title_s"];
    let title = (titles && titles.length) ? makeEntry(titles[0], "div", "pub_title") : "---";

    let abstracts = paper["abstract_s"];
    let abstract = (abstracts && abstracts.length) ? makeHidden (abstracts[0], "div", "pub_abstract", abstractid, false) : "";
    let abstractButton = (abstracts && abstracts.length) ? makeButton ("Abstract", abstractid) + " " :  "";

    let content = link + title 
            + makeEntry (paper["authFullName_s"], "div", "pub_authors")
            + makeEntry (paper["citationRef_s"] + type, "div", "pub_ref")
            + abstractButton
            + makeButton ("Bibtex", bibtexid)
            + abstract
            + makeHidden (paper["label_bibtex"], "pre", "pub_bibtex", bibtexid, true)
            ;
    return { "pub": makeEntry (content, "div", "pub_entry", ""), "year": paper["publicationDateY_i"]};
}

// ---------------------------------------------------------------------
// create a menu entry and the corresponding item
function makeYear (year, div, menu) {
    if (menu.menu) {
        let item = menu.template.cloneNode (true);
        let link = item.getElementsByTagName('a')[0];
        link.href = "#" + year;
        link.innerHTML = year;
        menu.menu.appendChild (item);
    }
    return "<h2 id=\"" + year + "\" class=\"pub_year\">" + year + "</h2>";
}

// ---------------------------------------------------------------------
// display all papers
function display (result, div, menu) {
    if ((typeof result) == "number") 
        div.textContent = "Error " + result;
    else {
        let currentyear = "";
        let json = JSON.parse (result);
        let response = json["response"];
        let n = response["numFound"];
        let docs = response["docs"];
        let content = "";
        for (let i=0; i< n; i++) {
            let pub = docs[i];
            let entry = displayPaper (pub, i);
            let year = entry.year;
            if (year != currentyear) {
                content += makeYear (year, "h2", menu);
                currentyear = year;
            }
            content += entry.pub + "\n";
        }
        div.innerHTML = content;
    }
}

// ---------------------------------------------------------------------
function getPublications (url, destdiv) {
    return new Promise( function (resolve, failure) {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        request.onreadystatechange = function() {
        if (this.status==200) {
            if (this.readyState==4) resolve(request.responseText);
        }
        else failure (request.status);
        }
    });
}

// ---------------------------------------------------------------------
// retrieve the menu holder and remove it from the menu and from the content
function getMenu (content) {
    let divs = document.getElementsByClassName ("nav-item");
    let n = divs.length;
    for (let i=0; i<n; i++) {
        let elt = divs.item(i);
        if (elt.textContent.indexOf (content) == 0) {
            let parent = elt.parentElement;
            parent.removeChild (elt);       // remove the menu holder item
            let tmp = document.getElementById(content);
            if (tmp)                        // remove also the corresponding content in the page
                tmp.parentElement.removeChild (tmp);
            return { menu: parent, template: elt };
        }
    }
    return { menu: null, template: null };
}


const pubdiv = document.getElementById("publications");
if (pubdiv) {
    let menu = getMenu ("menuholder");
    const url = "https://api.archives-ouvertes.fr/search/FAUST" 
    const options = "indent=true&wt=json&rows=2000&fl=*&sort=publicationDateY_i%20desc";
    getPublications(url + "?" + options).then ( (result) => { display(result, pubdiv, menu); });
}
