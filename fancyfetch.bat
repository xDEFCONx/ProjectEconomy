@echo off
setlocal EnableDelayedExpansion
echo FANCYFETCH IS RUNNING
echo(

:: Fetching fancyassets.txt and fancyimages.txt

curl -L -o "fancyassets.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/fancyassets.txt"
curl -L -o "fancyimages.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/fancyimages.txt"

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

:: Cleanup

del /f /q "fancyassets.txt"
del /f /q "fancyimages.txt"

endlocal