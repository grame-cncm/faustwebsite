
MAKE 	?= make
AWK		?= awk

UNAME := $(shell uname)

MAXDEPTH := '-d'
ifeq ($(UNAME), Linux)
MAXDEPTH := '-maxdepth'
endif

MKDIR    := mkdocs
DOCDIR   := $(MKDIR)/docs

NEWSDIR  := $(MKDIR)/src/news
NEWSARCH := $(NEWSDIR)/archive

DSTCOMM := $(MKDIR)/docs/community
DSTARCH := $(DSTCOMM)/archive

NEWS	 := $(shell find $(NEWSDIR) $(MAXDEPTH) 1 -name "*.md" | sort -r) 
ARCHNEWS := $(shell find $(NEWSARCH) $(MAXDEPTH) 1 -name "*.md" | sort -r) 


.PHONY: build


####################################################################
help:
	@echo "========================================================"
	@echo "                      Faust Web Site"
	@echo "This Makefile is intended to generate the faust web site"
	@echo "========================================================"
	@echo "Available targets are:"
	@echo "  install  : install the required components"
	@echo "  build    : build the web site"
	@echo "  serve    : launch the mkdoc server"
	@echo "Development specific targets are available:"
	@echo "  all      : generates all the necessary files from the src folder"
	@echo "  news     : build the news md file"
	@echo "  clean    : remove generated files (news.md)"
	@echo "Making the current version publicly available:"
	@echo "  publish  : make all + build and make sure that CNAME is preserved"

test: 
	@echo NEWS: $(NEWS)

####################################################################
build:
	$(MAKE) all
	cd $(MKDIR) && mkdocs build
	git checkout docs/CNAME
	git checkout docs/syfala
	
serve:
	@echo "you can browse the site at http://localhost:8000"
	cd $(MKDIR) && mkdocs serve

all:
	$(MAKE) news

clean:
	rm -f $(DSTCOMM)/news.md $(DSTARCH)/news.md

publish:
	$(MAKE) build
	git checkout docs/CNAME
	@echo "Review the changes, add new files, commit and push manually"
	

####################################################################
# building news
news : $(DSTCOMM) $(DSTCOMM)/news.md # $(DSTARCH)/news.md

$(DSTCOMM)/news.md : $(NEWS)
	cat $(NEWS) > $@
	echo >> $@

$(DSTCOMM)/archive/news.md : $(DSTARCH)
	cat $(ARCHNEWS) > $@

$(DSTCOMM):
	mkdir -p $(DSTCOMM)
$(DSTARCH):
	mkdir -p $(DSTARCH)


####################################################################
install:
	pip install mkdocs==1.5.3
	pip install mkdocs-pdf-export-plugin
	pip install markdown-include
	pip install mkdocs-bootswatch
	pip install mkdocs-redirects
	

uninstall:
	pip uninstall -y mkdocs-material
	pip uninstall -y pymdown-extensions
	pip uninstall -y markdown-blockdiag
	pip uninstall -y mkdocs-pdf-export-plugin
