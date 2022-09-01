@echo off 
title "Staging"
git add . 
git commit -m "pptx presentation"
git push -f origin  main
@echo off