@echo off
echo(
echo MODFETCH IS RUNNING
echo(

setlocal EnableDelayedExpansion

:: Set paths
set "PARENT_FILELIST=file_list.txt"
set "MOD_DIR_FILELIST=mods\file_list.txt"

:: Ensure mod directory exists
if not exist "mods\" mkdir "mods\"

:: Fetching and listing

curl -L -o "modstick.txt" "https://www.dropbox.com/scl/fi/17kp6xp1rfbfsh15gamkm/modstick.txt?rlkey=llwswxulvynf4pe4svmjhfj6k&st=o4r8fri7&dl=1"

if exist "%MOD_DIR_FILELIST%" (
    del /f /q "%MOD_DIR_FILELIST%"
)


echo Creating file_list of current mods...

curl -L -o "mods\+filelister.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods/+filelister.bat"
pushd "%~dp0mods"
call "+filelister.bat"
popd

if not exist "%PARENT_FILELIST%" (
    echo Fetching master file_list from the repo...
    curl -L -o "%PARENT_FILELIST%" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods/file_list.txt"
)

:: Build mod=>URL mapping from modstick.txt
for /f "usebackq tokens=1,* delims==" %%A in ("modstick.txt") do (
    set "modurl_%%A=%%B"
)

:: Read parent list into variable
for /f "delims=" %%a in (%PARENT_FILELIST%) do (
    set "parent_%%a=1"
)

:: Check modlist against parent list
for /f "delims=" %%b in (%MOD_DIR_FILELIST%) do (
    if defined parent_%%b (
        echo Mod already present: %%b
    ) else (
        echo Deleting: %%b
        del /f /q "mods\%%b"
    )
)

:: Check parent list against mod list, and download missing mods
for /f "delims=" %%c in (%PARENT_FILELIST%) do (
    set "modname=%%c"
    set "found=0"
    for /f "delims=" %%d in (%MOD_DIR_FILELIST%) do (
        if "%%c"=="%%d" set "found=1"
    )
    if !found! EQU 0 (
        call set "url=%%modurl_%%c%%"
        if defined url (
            echo Downloading new mod: %%c
            curl -L -o "mods\%%c" "!url!"
        ) else (
            echo URL not found for %%c in modstick.txt
        )
    )
)

:: Cleanup

del /f /q "modstick.txt"

echo(
echo MODFETCH COMPLETE
endlocal