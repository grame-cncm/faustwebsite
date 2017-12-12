import("stdfaust.lib");
import("demos.lib");

process = dm.cubicnl_demo : dm.wah4_demo <: dm.phaser2_demo :  dm.compressor_demo :  dm.zita_rev1; 