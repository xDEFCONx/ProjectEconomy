@echo off
setlocal EnableDelayedExpansion
echo FANCYFETCH IS RUNNING
echo(

:: Fetching fancyassets.txt and fancyimages.txt
curl -L -o "fancyassets.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/fancyassets.txt"
curl -L -o "fancyimages.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/fancyimages.txt"

if not exist "config\fancymenu\assets\" mkdir "config\fancymenu\assets\"
if not exist "config\fancymenu\slideshows\saintmonica\images\" mkdir "config\fancymenu\slideshows\saintmonica\images\"

:: Download assets
set "validAssets="
for /f "usebackq tokens=1,* delims==" %%A in ("fancyassets.txt") do (
    set "file=%%A"
    set "url=%%B"
    set "validAssets=!validAssets!;%%A"
    if not exist "config\fancymenu\assets\!file!" (
        echo Downloading asset: !file!
        curl -L -o "config\fancymenu\assets\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

:: Download images
set "validImages="
echo(
for /f "usebackq tokens=1,* delims==" %%A in ("fancyimages.txt") do (
    set "file=%%A"
    set "url=%%B"
    set "validImages=!validImages!;%%A"
    if not exist "config\fancymenu\slideshows\saintmonica\images\!file!" (
        echo Downloading image: !file!
        curl -L -o "config\fancymenu\slideshows\saintmonica\images\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

:: Cleanup unlisted assets
echo(
echo Cleaning up unlisted assets...
for %%F in (config\fancymenu\assets\*) do (
    set "filename=%%~nxF"
    echo !validAssets! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted asset: !filename!
        del "%%F"
    )
)

:: Cleanup unlisted images
echo(
echo Cleaning up unlisted images...
for %%F in (config\fancymenu\slideshows\saintmonica\images\*) do (
    set "filename=%%~nxF"
    echo !validImages! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted image: !filename!
        del "%%F"
    )
)

:: Cleanup temp files
del /f /q "fancyassets.txt"
del /f /q "fancyimages.txt"

endlocal