---
layout: post
title:  "View Faust's evolution"
date:   2018-07-23 15:10:00
categories: news
---
View the evolution of the [Faust project](https://github.com/grame-cncm/faust) from 2014 to 2018. 
{% include youtube.html id="_xLJdYkd89E" %}

The visualization was done using [Gource](http://gource.io/). Here is the command used (as suggested by [fullybacked](http://www.fullybaked.co.uk/articles/getting-gource-running-on-osx)):

    gource --hide dirnames,filenames --seconds-per-day 0.1 --auto-skip-seconds 1 -1920x1024 -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 faust-hd.mp4

