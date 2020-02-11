
MAKE	?= make
DEPLOY	?= newsite

#DOMAIN	?= https:\/\/faust.grame.fr
DOMAIN	?= file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)

SRC  := src/introduction.md src/quick-start.md src/overview.md src/compiling.md src/syntax.md src/compiler.md src/embedding.md src/osc.md src/http.md src/midi.md src/architectures.md src/mathdoc.md src/acknowledgments.md
OUT	 ?= index.html
SCRIPTS := ../../../script

DSP  := $(shell find img/src/exfaust* -name "*.dsp")
SVG  := $(DSP:%.dsp=%.svg)

HEADER ?= ../../../lib/header.html
FOOTER ?= ../../../lib/footer-includes.html
TMP := __tmp.html

all: $(OUT)


help:
	@echo "-------- Faust website: user manual generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the news"
	@echo " 'clean'        : remove the output folders and files"


test :
	echo $(SVG)

$(OUT) : $(SRC) $(HEADER) $(FOOTER) $(SCRIPTS)/toc.awk $(SCRIPTS)/faustcode.awk Makefile 
	pandoc --standalone --toc --toc-depth=4 --metadata pagetitle="News" --mathjax $(SRC) | sed -e 's/<a href/<a class=nav-link href/' | awk -f $(SCRIPTS)/toc.awk | awk -f $(SCRIPTS)/faustcode.awk LOCATION=doc/manual> $(TMP)
	cat $(HEADER) $(TMP) $(FOOTER) | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	rm -f $(TMP)
	make svg

clean:
	rm -rf $(OUT) img/src/exfaust*

svg : $(SVG)

%.svg:%.dsp
	faust -svg $< > /dev/null
	
	

