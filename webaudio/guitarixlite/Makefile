#---------------------------------------------
# Build guitarix lite as a webaudio application
# Best viewed with Firefox 29 and up
#---------------------------------------------

# targets

web : guitarixlite.html

app : guitarixlite.app

clean:
	rm -rf guitarixlite.html guitarixlite.app

# rules

guitarixlite.html : guitarixlite.dsp
	faust2webaudioasm guitarixlite.dsp

guitarixlite.app : guitarixlite.dsp
	faust2jaqt guitarixlite.dsp

