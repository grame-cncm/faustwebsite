# Faust Website

This repository contains the source of the Faust website which is currently deployed at <https://faust.grame.fr>.

### Prerequisites
- you must have python and pip installed.

### Building the web site

The build process is based on `make`. Building the documentation site is based on [mkdocs](https://www.mkdocs.org/).
To install the required components, type:
~~~~~~~~~~~~~~~~
$ make install
~~~~~~~~~~~~~~~~

To generate the web site, type:
~~~~~~~~~~~~~~~~
$ make build
~~~~~~~~~~~~~~~~
You'll find the web site in the ./docs folder.

### Testing and generating

You can test the web site using the mkdoc embedded web server. This server also scan any change in the source directory and refresh the pages dynamically which is really convenient for the development process. To launch the server type:
~~~~~~~~~~~~~~~~
$ make serve
~~~~~~~~~~~~~~~~

More details about the build process. Type:
~~~~~~~~~~~~~~~~
$ make help
~~~~~~~~~~~~~~~~


### Publishing 

The docs folder at rool level contains all files that will be published. To make the current version publicly available:
- add all the new files using `git add docs`
- commit using `git commit -am "message"` (so new files and deleted files will be commited, except docs/CNAME file) 
- and push the commit

