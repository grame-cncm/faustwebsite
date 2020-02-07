
MAKE       	?= make
DEPLOY      ?= newsite
#DOMAIN		?= https:\/\/faust.grame.fr
DOMAIN     = file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)

.PHONY: news

DOC			:= $(DEPLOY)/doc
COMMUNITY	:= $(DEPLOY)/community
MWF			:= $(COMMUNITY)/made-with-faust
SRC 		:= src
DSRC		:= $(SRC)/doc
STDFRAME	:= header.html footer.html
EXTFRAME	:= header.html extfooter.html
PANDOCFRAME	:= pandocheader.html pandocfooter.html

# list of output html files
OUT			:= $(DEPLOY)/index.html $(DOC)/index.html $(DOC)/manual/index.html $(DOC)/libraries/index.html $(DOC)/tutorials/index.html $(DOC)/examples/index.html $(DEPLOY)/downloads/index.html $(DEPLOY)/tools/index.html $(COMMUNITY)/index.html $(COMMUNITY)/news/index.html $(COMMUNITY)/mailing-lists/index.html $(COMMUNITY)/ifc/index.html $(COMMUNITY)/publications/index.html $(COMMUNITY)/press/index.html $(COMMUNITY)/bug/index.html $(COMMUNITY)/sponsors/index.html $(MWF)/index.html $(MWF)/mi-faust/index.html $(COMMUNITY)/misc/index.html $(DEPLOY)/showcase/index.html #$(DEPLOY)/tools/editor/index.html

# list of folders that will be copied from to $(DEPLOY)
RSRCDIRS := doc/manual/img \
			doc/manual/misc \
			doc/tutorials/img \
			doc/tutorials/misc \
			doc/examples/img \
			community/misc/img \
			community/news/img \
			community/ifc/img \
			community/sponsors/img \
			community/made-with-faust/img \
			community/made-with-faust/mi-faust/img \
			community/made-with-faust/mi-faust/code \
			showcase/img \
			img

OUTDIRS := $(RSRCDIRS:src/%=%) 

all:
	$(MAKE) html
	$(MAKE) rsrc

test:
	@echo $(OUTDIRS)

help:
	@echo "-------- Faust website generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the website"
	@echo "                  call the html, news and static targets"
	@echo " 'html'         : build the html pages"
	@echo " 'rsrc'         : copy the static resources"
	@echo " 'news'         : build faust news"
	@echo "Utilities:"
	@echo " 'serve'        : launch a python server on port 8000"
	@echo " 'clean'        : remove intermediate files (headers and footers) and $(DEPLOY) folder"
	@echo "Options:"
	@echo " 'DOMAIN'       : the base url for internal hrefs (currently $(DOMAIN))"
	@echo " 'DEPLOY'       : the deployement folder (currently $(DEPLOY))"


clean :
	rm -rf $(DEPLOY)
	rm -f $(STDFRAME) $(EXTFRAME) $(PANDOCFRAME)


html : $(OUT)

news :
	@echo building faust news
	cd src/community/news && ./build -d $(DOMAIN)
	

mkdir = $(shell [ -d $(DEPLOY)/$(d) ] || mkdir -p $(DEPLOY)/$(d) ]; cp -r src/$(d)/*  $(DEPLOY)/$(d)/)
rsrc:
	$(foreach d,$(RSRCDIRS),$(mkdir))
	@[ -d $(DEPLOY)/css ] || mkdir -p $(DEPLOY)/css
	cp -r css/* 			$(DEPLOY)/css

serve : 
	python -m http.server 8000 --directory $(DEPLOY)



############################################
# building headers and footers
header.html : lib/header.html 
	cat lib/header.html | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	echo "<body>" >> $@

footer.html : lib/footer-content.html
	cat lib/footer-content.html | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	echo "</body></html>" >> $@

extfooter.html: lib/footer-content.html lib/footer-includes.html
	cat lib/footer-content.html | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	cat lib/footer-includes.html >> $@
	echo "</body></html>" >> $@

pandocheader.html: header.html
	cat header.html > $@
	echo '<main role="main"><div class="container default-container">' >> $@ 

pandocfooter.html: lib/footer-content.html lib/footer-includes.html
	echo "</div></main>" > $@
	cat lib/footer-content.html | sed -e 's/__DOMAIN__/$(DOMAIN)/g' >> $@
	cat lib/footer-includes.html  >> $@
	echo "</body></html>" >> $@

############################################
# special rule to build editor index.html 
$(DEPLOY)/tools/editor/index.html: $(SRC)/tools/editor/index.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cat $< | awk -v includes="$HEADERINCLUDES" '/<\/head>/{print includes}1' | awk -v nav="$NAVIGATION<main role=\"main\"><div class=\"navzone\"></div><div class=\"container-fluid\"><div class=\"row\">" '/<div class=\"application\">/{print nav}1' | awk '/<script src=\"codemirror\/lib\/codemirror.js\">/{print "</div></main>"}1' | awk '{gsub(/<img src=\"faust-logo.png\" width=58px alt=\"LOGO\">/,"")}1' | awk -v domain="$DOMAIN" '{gsub(/__DOMAIN__/,domain)}1' > $@

	
############################################
# rules to build html from html and md files 
$(DEPLOY)/%.html: $(SRC)/%.html header.html footer.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cat  header.html $< footer.html > $@ 

$(DEPLOY)/%.html: $(SRC)/%.ext.html header.html extfooter.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cat  header.html $< extfooter.html > $@ 

$(DEPLOY)/%.html: $(SRC)/%.md pandocheader.html pandocfooter.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	pandoc -B pandocheader.html -A pandocfooter.html $< -o $@ 
	
