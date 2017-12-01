
import("stdfaust.lib");

process = checkbox("play") * ba.pulsen(10,4400) 
  		<: par(i, 30, pm.djembe(20+sqrt(50)*i, 0.3, 0.2, 1)) 
		:> _,_;
