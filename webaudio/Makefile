sources = $(wildcard *.dsp)
appls = $(sources:.dsp=.html)

all : $(appls)

%.html : %.dsp
	faust2webaudioasm -links $<

clean :
	rm -r *.html *-svg

remote :
	scp -r *.dsp *.html *-svg faust@faust.grame.fr:www/www/
