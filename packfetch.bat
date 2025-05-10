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

:: Cleanup unused resource packs
echo(
echo Cleaning up unused resource packs...
for %%F in (resourcepacks\*) do (
    set "filename=%%~nxF"
    echo !validPacks! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted pack: !filename!
        del "%%F"
    )
)

:: Cleanup unused shader packs
echo(
echo Cleaning up unused shader packs...
for %%F in (shaderpacks\*) do (
    set "filename=%%~nxF"
    echo !validShaders! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted shader: !filename!
        del "%%F"
    )
)

:: Cleanup

del /f /q "packstick.txt"
del /f /q "shaderstick.txt"

endlocal