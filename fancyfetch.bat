@echo off
setlocal EnableDelayedExpansion
echo FANCYFETCH IS RUNNING
echo(

if not exist "config\fancymenu\assets\" mkdir "config\fancymenu\assets\"
if not exist "config\fancymenu\slideshows\saintmonica\images\" mkdir "config\fancymenu\slideshows\saintmonica\images\"

for /f "usebackq tokens=1,* delims==" %%A in ("fancyassets.txt") do (
    set "file=%%A"
    set "url=%%B"
    if not exist "config\fancymenu\assets\!file!" (
        echo config\fancymenu\assets\!file! doesn't exist
        echo Downloading asset: !file!
        curl -L -o "config\fancymenu\assets\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

echo Fetching Fancymenu images...
echo(
for /f "usebackq tokens=1,* delims==" %%A in ("fancyimages.txt") do (
    set "file=%%A"
    set "url=%%B"
    if not exist "config\fancymenu\slideshows\saintmonica\images\!file!" (
        echo Downloading image: !file!
        curl -L -o "config\fancymenu\slideshows\saintmonica\images\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)
endlocal
pause