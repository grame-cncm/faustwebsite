# Faust Website

This file documents the build process using make.
You should read the README.md file prior this file.


## Files organization

The Makefile assumes that the hierarchy of output files is similar to the source files.

The build process is based on 3 general rules:

- $(DEPLOY)/%.html: $(SRC)/%.html : add a standard header and footer to the source file
- $(DEPLOY)/%.html: $(SRC)/%.ext.html : add a standard header and an extended footer to the source file
- $(DEPLOY)/%.html: $(SRC)/%.md : call pandoc with a specific header and footer

## Important: 

To operate correctly and to trigger the above rules, naming conventions MUST be respected i.e. the '%' part of the rule must be the same. For example, for an output file named index.html, `make` expects to find a file named index.html or index.md or index.ext.html at the corresponding source hierarchy.


## Note regarding resources: 

For resources that simply need to be copied at build location are directory based and must respect the hierarchy constraint.
A variable named RSRCDIRS list all the folders whose content must be copied. You can add new resources by adding the corresponding folder to RSRCDIRS (without the leading 'src' prefix).

## Help on using the Makefile: 

~~~~~~~~~~~~
$ make help
~~~~~~~~~~~~

