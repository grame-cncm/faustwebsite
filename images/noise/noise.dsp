noise  = +(12345) ~ *(1103515245) : /(2147483647.0);
process = noise * hslider("noise volume", 0, 0, 1, 0.01);