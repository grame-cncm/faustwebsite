#!/bin/bash
set -e

$SUDO=`which $SUDO`

echo "Updating packages..."
$SUDO apt-get -y update
echo "Installing Faust dependencies..."
$SUDO apt-get install -y build-essential pkg-config git libmicrohttpd-dev llvm-3.6 libssl-dev ncurses-dev libsndfile-dev

# Install all the needed SDK
$SUDO apt-get install -y libgtk2.0-dev libasound2-dev jackd2 libjack-jackd2-dev libqrencode-dev
$SUDO apt-get install -y qt4-default libcsound64-dev  dssi-dev lv2-dev puredata-dev supercollider-dev wget unzip
$SUDO apt-get install -y inkscape graphviz

# Install faust2pd from Albert Greaf Pure-lang PPA
$SUDO apt-get install -y software-properties-common
$SUDO add-apt-repository ppa:dr-graef/pure-lang.trusty
$SUDO apt-get -y update
$SUDO apt-get install -y faust2pd

# Install VST SDK
wget http://www.steinberg.net/sdk_downloads/vstsdk365_12_11_2015_build_67.zip
unzip vstsdk365_12_11_2015_build_67.zip
$SUDO mv "VST3 SDK" /usr/local/include/vstsdk2.4

# Install cross-compiler
$SUDO apt-get install -y g++-mingw-w64

# Install MaxMSP SDK
wget https://cycling74.com/download/max-sdk-7.1.0.zip
unzip max-sdk-7.1.0.zip
cp -r max-sdk-7.1.0/source/c74support /usr/local/include/

# Install Faust
git clone git://git.code.sf.net/p/faudiostream/code faust
cd faust
git checkout faust2
make world
$SUDO make install
echo "Installation Done!"

echo "Test Installation"
#### Test all faust2xxx scripts ####
for S in tools/faust2appls/faust2*; do ($S examples/noise.dsp &>MYLOG)&&(echo $(tput smso) $S OK $(tput rmso))||(echo $(tput smso) $S FAILED $(tput rmso)); cat MYLOG; done

