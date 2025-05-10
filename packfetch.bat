@echo off
setlocal EnableDelayedExpansion
echo PACKFETCH IS RUNNING
echo(

:: Fetching packstick.txt and shaderstick.txt

curl -L -o "packstick.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/packstick.txt"
curl -L -o "shaderstick.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/shaderstick.txt"

if not exist "resourcepacks\" mkdir "resourcepacks\"
if not exist "shaderpacks\" mkdir "shaderpacks\"

:: Download resource packs
set "validPacks="
for /f "usebackq tokens=1,* delims==" %%A in ("packstick.txt") do (
    set "file=%%A"
    set "url=%%B"
    set "validPacks=!validPacks!;%%A"
    if not exist "resourcepacks\!file!" (
        echo Downloading resource pack: !file!
        curl -L -o "resourcepacks\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

:: Download shader packs
echo(
set "validShaders="
for /f "usebackq tokens=1,* delims==" %%A in ("shaderstick.txt") do (
    set "file=%%A"
    set "url=%%B"
    set "validShaders=!validShaders!;%%A"
    if not exist "shaderpacks\!file!" (
        echo Downloading shader pack: !file!
        curl -L -o "shaderpacks\!file!" "!url!"
    ) else (
        echo !file! present.
    )
)

:: Cleanup unlisted resource packs
echo(
echo Cleaning up unlisted resource packs...
for %%F in (resourcepacks\*) do (
    set "filename=%%~nxF"
    echo !validPacks! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted pack: !filename!
        del "%%F"
    )
)

:: Cleanup unlisted shader packs
echo(
echo Cleaning up unlisted shader packs...
for %%F in (shaderpacks\*) do (
    set "filename=%%~nxF"
    echo !validShaders! | findstr /i /c:";!filename!" >nul
    if errorlevel 1 (
        echo Deleting unlisted shader: !filename!
        del "%%F"
    )
)

:: Cleanup temporary files
del /f /q "packstick.txt"
del /f /q "shaderstick.txt"

endlocal