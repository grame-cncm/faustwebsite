
BEGIN {
	PRINT = 0;
	print "<div class=\"container-fluid\">\n<div class=\"row faust-doc\">\n<nav id=\"TOC\" class=\"col-3 faust-doc-content\">";
	print "<div style=\"height: 100%;overflow-y: scroll;\">";
	print "<ul class=\"nav nav-pills flex-column\">";
}

END {
	print "</div>\n</div>\n</div>\n</main>\n";
}

################# 
/^..*/ { 
	if (PRINT) print $0;
}

# first header is filtered, filtering ends with the first <ul>
/<ul>/ 					{ PRINT=1; }

/<!-- doc-begin -->/	{ 
	print "<main role=\"main\" class=\"col-9 ml-sm-auto px-4 faust-doc-content\">"
	print "<div data-spy=\"scroll\" data-target=\"#TOC\" data-offset=\"100\" style=\"height: 100%;overflow-y: scroll;\">";
}
