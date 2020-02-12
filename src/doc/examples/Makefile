
MAKE	?= make
AWK	    ?= awk
DEPLOY	?= newsite

#DOMAIN	?= https:\/\/faust.grame.fr
DOMAIN	?= file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)

LOCATION ?= ../../../../faust/examples
DEST     := src/generated
FOLDERS  := $(shell find $(LOCATION) -type d -d 1 | sort -f)
#EXAMPLES := $(shell find $(LOCATION) -name "*.dsp" -d 2 | grep -v 'multibandFilter\|guitarix\|mixer')
GEN      := $(FOLDERS:$(LOCATION)/%=$(DEST)/%)
MD       := src/faust-examples.md $(GEN:%=%.md)

OUT	 ?= index.html
SCRIPTS := ../../../script

DSP  := $(shell find img/src/exfaust* -name "*.dsp" || echo "")
SVG  := $(DSP:%.dsp=%.svg)

HEADER ?= ../../../lib/header.html
FOOTER ?= ../../../lib/footer-includes.html
TMP := __tmp.html

all: $(OUT)


help:
	@echo "-------- Faust website: examples generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the news"
	@echo " 'clean'        : remove the output folders and files"


test :
	echo $(MD)

$(OUT) : $(MD) $(HEADER) $(FOOTER) $(SCRIPTS)/toc.awk $(SCRIPTS)/faustcode.awk Makefile 
	pandoc --standalone --toc --toc-depth=4 --metadata pagetitle="Faust Examples" --mathjax $(MD) | sed -e 's/<a href/<a class=nav-link href/' | $(AWK) -f $(SCRIPTS)/toc.awk | $(AWK) -f $(SCRIPTS)/faustcode.awk LOCATION=doc/examples> $(TMP)
	cat $(HEADER) $(TMP) $(FOOTER) | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	rm -f $(TMP)
	make svg

md : $(MD)

$(DEST):
	mkdir $(DEST) 
	
clean:
	rm -rf $(OUT) $(DEST) img/src

svg : $(SVG)

$(DEST)%.md:$(LOCATION)/% $(DEST)
	$(eval tmp := $(shell ls $</*.dsp | grep -v 'multibandFilter\|guitarix\|mixer'))
	./makemd $(*F) $(tmp) > $@

%.svg:%.dsp
	faust -svg $< > /dev/null
	
	

