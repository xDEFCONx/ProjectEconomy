@echo off
echo(
echo MODFETCH IS RUNNING
echo(

setlocal EnableDelayedExpansion

:: Set paths

set "PARENT_FILELIST=file_list.txt"
set "MOD_DIR=mods\"
set "MOD_DIR_FILELIST=%MOD_DIR%\file_list.txt"
set "DROPBOX_URL_BASE=https://www.dropbox.com/home/mods"

:: Read parent list into variable

for /f "delims=" %%a in (%PARENT_FILELIST%) do (
    set "parent_%%a=1"
)

:: Check modlist against parent list

for /f "delims=" %%b in (%MOD_DIR_FILELIST%) do (
    if defined parent_%%b (
        :: String exists in parent, do nothing
        echo Mod already present: %%b
    ) else (
        :: String not in parent list, delete file
        echo Deleting: %%b
        del /f /q "%MOD_DIR%\%%b"
    )
)

:: Check parent list against mod list

for /f "delims=" %%c in (%PARENT_FILELIST%) do (
    set "modname=%%c"
    set "found=0"
    for /f "delims=" %%d in (%MOD_DIR_FILELIST%) do (
        if "%%c"=="%%d" set "found=1"
    )
    if !found! EQU 0 (
        set "urlname=!modname: =%%20!"
        echo Downloading new mod: %%c
        curl -L -o "%MOD_DIR%\%%c" "%DROPBOX_URL_BASE%!urlname!?raw=1"
    )
)

echo(
echo MODFETCH COMPLETE