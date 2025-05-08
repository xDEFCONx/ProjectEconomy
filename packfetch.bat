@echo off
setlocal EnableDelayedExpansion
echo PACKFETCH IS RUNNING
echo(

:: Fetching packstick.txt

curl -L -o "packstick.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/packstick.txt"
curl -L -o "shaderstick.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/shaderstick.txt"

if not exist "resourcepacks\" mkdir "resourcepacks\"
if not exist "shaderpacks\" mkdir "shaderpacks\"

for /f "usebackq tokens=1,* delims==" %%A in ("packstick.txt") do (
    set "file=%%A"
    set "url=%%B"
    if not exist "resourcepacks\!file!" (
        echo Downloading resource pack: !file!
        curl -L -o "resourcepacks\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

echo(
for /f "usebackq tokens=1,* delims==" %%A in ("shaderstick.txt") do (
    set "file=%%A"
    set "url=%%B"
    if not exist "shaderpacks\!file!" (
        echo Downloading shader pack: !file!
        curl -L -o "shaderpacks\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

:: Cleanup

del /f /q "packstick.txt"
del /f /q "shaderstick.txt"

endlocal