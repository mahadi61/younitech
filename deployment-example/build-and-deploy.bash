#!/bin/bash
set -ex

PROJECT_ROOT=/root/FigmaTask/

# Build docker dev image
cd $PROJECT_ROOT
sudo docker compose up -d --build