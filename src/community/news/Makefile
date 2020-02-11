
MAKE	?= make
DEPLOY	?= newsite

#DOMAIN	?= https:\/\/faust.grame.fr
DOMAIN	?= file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)
SCRIPTS := ../../../script

SRC  := $(shell find src -name "*.md" | sort -r)
OUT	 ?= index.html

HEADER ?= ../../../lib/header.html
FOOTER ?= ../../../lib/footer-includes.html
TMP := __tmp.html

all: $(OUT)

help:
	@echo "-------- Faust website: news generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the news"

$(OUT) : $(SRC) $(HEADER) $(FOOTER) $(SCRIPTS)/toc.awk Makefile 
	pandoc --standalone --toc --toc-depth=1 --metadata pagetitle="News" --mathjax $(SRC) | sed -e 's/<a href/<a class=nav-link href/' | awk -f $(SCRIPTS)/toc.awk > $(TMP)
	cat $(HEADER) $(TMP) $(FOOTER) | sed -e 's/__DOMAIN__/$(DOMAIN)/g' > $@
	rm -f $(TMP)

clean:
	rm -f $(OUT)
