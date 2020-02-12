
MAKE	?= make
AWK 	?= awk
DEPLOY	?= newsite

#DOMAIN	?= https:\/\/faust.grame.fr
DOMAIN	?= file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)

SRC  := src/faust-tutorials.md src/juce.md src/teensy.md src/esp32.md src/paw18.md src/basic-osc.md
OUT	 ?= index.html
SCRIPTS := ../../../script

DSP  := $(shell find img/src/exfaust* -name "*.dsp")
SVG  := $(DSP:%.dsp=%.svg)

HEADER ?= ../../../lib/header.html
FOOTER ?= ../../../lib/footer-includes.html
TMP := __tmp.html

all: $(OUT)


help:
	@echo "-------- Faust website: tutorial generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the news"
	@echo " 'clean'        : remove the output folders and files"


test :
	echo $(SVG)

$(OUT) : $(SRC) $(HEADER) $(FOOTER) $(SCRIPTS)/toc.awk $(SCRIPTS)/faustcode.awk Makefile 
	pandoc --standalone --toc --toc-depth=4 --metadata pagetitle="Faust Tutorials" --mathjax $(SRC) | sed -e 's/<a href/<a class=nav-link href/' | $(AWK) -f $(SCRIPTS)/toc.awk | $(AWK) -f $(SCRIPTS)/faustcode.awk LOCATION=doc/tutorials> $(TMP)
	cat $(HEADER) $(TMP) $(FOOTER) | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	rm -f $(TMP)
	make svg

clean:
	rm -rf $(OUT) img/src/exfaust*

svg : $(SVG)

%.svg:%.dsp
	faust -svg $< > /dev/null
	
	

