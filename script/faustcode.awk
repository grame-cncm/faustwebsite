
function makeFaust(code, i) {
	gsub(/<\/*code>/,"",code);
	gsub(/<\/*pre>/ ,"",code);
	gsub("&quot;","\"",code);
	gsub("&lt;"  ,"<",code);
	gsub("&gt;"  ,">",code);
	gsub(/&#39;/ ,"\x27",code);
	gsub(/&amp;/ ,"\\&",code);
	current = "exfaust"i;
	folder = "img/src/"current;
	dsp = folder"/"current".dsp";
	svg = folder"/"current"-svg/process.svg";
	cmd = "[ -d " folder " ] || mkdir -p " folder;
	system (cmd);
	print code > dsp;
	print "<div class=\"faust-run\"><img src=\""svg"\" class=\"mx-auto d-block\">"
	print "<pre><code>";
	print code;
	print "</code></pre>"
	print "<a href=\"https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/"LOCATION"/"dsp"\" target=\"editor\">";
	print "<button type=\"button\" class=\"btn btn-primary\">Try it Yourself >></button></a>";
	print "</div>";
}

BEGIN {
	INDEX = 0;
	INFAUST = 0;
	FAUSTCODE = "";
	NL = "";
}

END {
}

################# 
/<!-- \/faust-run -->/ 	{
	INFAUST = 0;
	makeFaust(FAUSTCODE, INDEX++);
	FAUSTCODE = "";
	NL = "";
}

/^..*/ { 
	if (INFAUST) {
		FAUSTCODE = FAUSTCODE NL $0;
		NL = "\n";
	}
	else print $0;
}

/<!-- faust-run -->/	{ 
	INFAUST = 1;
}


