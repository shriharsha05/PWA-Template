#!/bin/bash

sudo apt-get update
sudo apt-get install python3.7
sudo apt install python3-pip
sudo pip3 install virtualenv

cd ..
virtualenv venv
source venv/bin/activate
cd PWA-Template/
pip3 install -r requirements.txt