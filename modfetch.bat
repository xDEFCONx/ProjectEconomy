@echo off
setlocal EnableDelayedExpansion

:: Set paths

set "PARENT_FILELIST=file_list.txt"
set "SUBDIR=mods\"
set "SUBDIR_FILELIST=%SUBDIR%\file_list.txt"
set "DROPBOX_URL_BASE=https://www.dropbox.com/home/mods"  :: Replace with your actual Dropbox raw link base

:: Read parent list into variable

for /f "delims=" %%a in (%PARENT_FILELIST%) do (
    set "parent_%%a=1"
)

:: Check modlist against parent list

for /f "delims=" %%b in (%SUBDIR_FILELIST%) do (
    if defined parent_%%b (
        :: String exists in parent, do nothing
        echo Skipping existing file: %%b
    ) else (
        :: String not in parent list, delete file
        echo Deleting %%b from subdirectory...
        del /f /q "%SUBDIR%\%%b"
    )
)

:: Check parent list against mod list

for /f "delims=" %%c in (%PARENT_FILELIST%) do (
    set "found=0"
    for /f "delims=" %%d in (%SUBDIR_FILELIST%) do (
        if "%%c"=="%%d" set "found=1"
    )
    if !found! EQU 0 (
        echo Downloading missing file: %%c
        curl -L -o "%SUBDIR%\%%c" "%DROPBOX_URL_BASE%%%c?raw=1"
    )
)

echo Done.
pause