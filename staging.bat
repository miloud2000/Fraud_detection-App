@echo off 
title "Staging"
git add . 
git commit -m "Night time staging"
git push -f origin  master
@echo off