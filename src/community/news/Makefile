
MAKE       	?= make
DEPLOY      ?= newsite
#DOMAIN		?= https:\/\/faust.grame.fr
DOMAIN     = file:\/\/\/Users\/fober\/src\/faust\/faustwebsite\/$(DEPLOY)


SRC  := $(shell find src -name "*.md")
OUT	 := news.html

all: $(OUT)


help:
	@echo "-------- Faust website: news generation --------"
	@echo "Available targets are:"
	@echo " 'all' (default): build all the resources required by the news"


test :
	echo $(SRC)

$(OUT) : $(SRC)
	pandoc --standalone --toc --toc-depth=1 --metadata pagetitle="News" --mathjax -o $@  $(SRC)

