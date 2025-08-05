#!/bin/bash
set -ex

PROJECT_ROOT=/root/FigmaTask/

# Build docker dev image
cd $PROJECT_ROOT
sudo git reset .
sudo git clean -df
sudo git stash
sudo git pull