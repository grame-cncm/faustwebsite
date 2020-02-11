
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

IN := $(shell find src -name "index.*html") $(shell find src -name "index.md")
OO  := $(IN:src/%=$(DEPLOY)/%)
OM  := $(OO:%.md=%.html) 
# list of output html files
OUT := $(OM:%.ext.html=%.html) $(DOC)/manual/index.html $(DOC)/examples/index.html $(DOC)/tutorials/index.html $(COMMUNITY)/news/index.html

# list of folders that will be copied from to $(DEPLOY)
RSRCDIRS := doc/manual/img \
			doc/manual/misc \
			doc/tutorials/img \
			doc/tutorials/misc \
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
	@echo $(IN)
	@echo ---- 
	@echo $(OUT)

help:
	@echo "-------- Faust website generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the website"
	@echo "                  call the html, news and static targets"
	@echo " 'html'         : build the html pages"
	@echo " 'rsrc'         : copy the static resources"
	@echo " 'news'         : build faust news"
	@echo " 'manual'       : build faust user manual"
	@echo " 'examples'     : build faust examples"
	@echo " 'tutorials'    : build faust tutorials"
	@echo "Utilities:"
	@echo " 'serve'        : launch a python server on port 8000"
	@echo " 'clean'        : remove intermediate files (headers and footers) and $(DEPLOY) folder"
	@echo "Options:"
	@echo " 'DOMAIN'       : the base url for internal hrefs (currently $(DOMAIN))"
	@echo " 'DEPLOY'       : the deployement folder (currently $(DEPLOY))"


clean :
	rm -rf $(DEPLOY)
	rm -f $(STDFRAME) $(EXTFRAME) $(PANDOCFRAME)
	rm -f $(SRC)/doc/manual/index.html
	make -C $(SRC)/doc/manual clean
	make -C $(SRC)/doc/examples clean
	make -C $(SRC)/doc/tutorials clean
	make -C $(SRC)/community/news clean

html : $(OUT)	

mkdir = $(shell [ -d $(DEPLOY)/$(d) ] || mkdir -p $(DEPLOY)/$(d); cp -r src/$(d)/*  $(DEPLOY)/$(d)/)
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
# $(DEPLOY)/tools/editor/index.html: $(SRC)/tools/editor/index.html
# 	@[ -d $(@D) ] || mkdir -p $(@D)
# 	cat $< | awk -v includes="$HEADERINCLUDES" '/<\/head>/{print includes}1' | awk -v nav="$NAVIGATION<main role=\"main\"><div class=\"navzone\"></div><div class=\"container-fluid\"><div class=\"row\">" '/<div class=\"application\">/{print nav}1' | awk '/<script src=\"codemirror\/lib\/codemirror.js\">/{print "</div></main>"}1' | awk '{gsub(/<img src=\"faust-logo.png\" width=58px alt=\"LOGO\">/,"")}1' | awk -v domain="$DOMAIN" '{gsub(/__DOMAIN__/,domain)}1' > $@


############################################
# special rule for the user manual
manual:
	$(MAKE) -C $(SRC)/doc/manual/

$(SRC)/doc/manual/index.html:
	$(MAKE) -C $(SRC)/doc/manual/

$(DEPLOY)/doc/manual/index.html: $(SRC)/doc/manual/index.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cp $(SRC)/doc/manual/index.html $@

############################################
# special rule for examples
examples:
	$(MAKE) -C $(SRC)/doc/examples/

$(SRC)/doc/examples/index.html:
	$(MAKE) -C $(SRC)/doc/examples/

$(DEPLOY)/doc/examples/index.html: $(SRC)/doc/examples/index.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cp $(SRC)/doc/examples/index.html $@

############################################
# special rule for tutorial
tutorials:
	$(MAKE) -C $(SRC)/doc/tutorials/

$(SRC)/doc/tutorials/index.html:
	$(MAKE) -C $(SRC)/doc/tutorials/

$(DEPLOY)/doc/tutorials/index.html: $(SRC)/doc/tutorials/index.html
	@[ -d $(@D) ] || mkdir -p $(@D)
	cp $(SRC)/doc/tutorials/index.html $@

############################################
# special rule for news
news:
	$(MAKE) -C $(SRC)/community/news/

$(DEPLOY)/community/news/index.html: 
	$(MAKE) -C $(SRC)/community/news/
	@[ -d $(@D) ] || mkdir -p $(@D)
	cp $(SRC)/community/news/index.html $@
	
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
	
