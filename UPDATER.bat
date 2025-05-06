                @echo off
setlocal

echo PROJECTECONOMY - Updater implementation by xDEFCONx
echo ---------------------------------------------------

:: Create options/properties if not currently present

if not exist "options.txt" (
    curl -L -o "options.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/options.txt"
)
curl -L -o "modfetch.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/modfetch.bat"
curl -L -o "fancyfetch.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/modfetch.bat"

:: Version checking

curl -L -o "current_version.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/current_version.txt"
curl -L -o "file_list.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods/file_list.txt"
set /p VERSION_CHECK=<current_version.txt
if exist "%VERSION_CHECK%.version" (
    del /f /q "current_version.txt"
    del /f /q "file_list.txt"
    echo This instance is already up to date.
    pause
    exit /b
)

echo Downloading latest version of ProjectEconomy...

:: Define the URL of the GitHub repository's main branch as a zip archive
set REPO=https://github.com/xDEFCONx/ProjectEconomy/archive/refs/heads/latest.zip
set OUTPUT=ProjectEconomy-latest.zip

:: Use Powershell to invoke a request silently, and expand into unzipped dir

powershell -NoLogo -NoProfile -Command ^
"$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri '%REPO%' -OutFile '%OUTPUT%'; Expand-Archive -Path '%OUTPUT%' -DestinationPath 'update' -Force"

if exist "%OUTPUT%" (
    echo Downloaded
) else (
    exit /b
)

echo(
echo Updating to the latest version of ProjectEconomy...
echo(

set "version=update\ProjectEconomy-latest\"

:: Checks for update folder

if not exist "%version%\" (
    echo Folder does not exist: %version%
    pause
    exit /b
)

:: Delete previous content in targets

echo Deleting contents...

:: For configs exclusively, prevents deletion of certain fancymenu dirs due to file sizes

for %%I in ("config\*") do (
    if /I not "%%~nxI"=="fancymenu" (
        echo Deleting: %%I
        if exist "%%I\" (
            rd /s /q "%%I"
        ) else (
            del /q "%%I"
        )
    )
)

for %%J in ("config\fancymenu\*") do (
    if /I not "%%~nxJ"=="assets" if /I not "%%~nxJ"=="slideshows" (
        echo Deleting: %%J
        if exist "%%J\" (
            rd /s /q "%%J"
        ) else (
            del /q "%%J"
        )
    )
)

set "SLIDESHOW_PROPERTIES=config\fancymenu\slideshows\saintmonica\properties.txt"
if exist "%SLIDESHOW_PROPERTIES%" (
    echo Deleting %SLIDESHOW_PROPERTIES%
    del /q "%SLIDESHOW_PROPERTIES%"
)

del /q "kubejs\*" >nul 2>&1
for /d %%D in ("kubejs\*") do rd /s /q "%%D"

del /q "local\*" >nul 2>&1
for /d %%D in ("local\*") do rd /s /q "%%D"

del /q "resourcepacks\*" >nul 2>&1
for /d %%D in ("resourcepacks\*") do rd /s /q "%%D"

del /q "shaderpacks\*" >nul 2>&1
for /d %%D in ("shaderpacks\*") do rd /s /q "%%D"

:: Copy contents from update to target

echo Copying contents from "%version%\config\" to "config\"...
xcopy "%version%\config\*" "config\" /s /e /i /h /y

echo Copying contents from "%version%\kubejs\" to kubejs\"...
xcopy "%version%\kubejs\*" "kubejs\" /s /e /i /h /y

echo Copying contents from "%version%\local\" to local\"...
xcopy "%version%\local\*" "local\" /s /e /i /h /y

echo Copying contents from "%version%\resourcepacks\" to resourcepacks\"...
xcopy "%version%\resourcepacks\*" "resourcepacks\" /s /e /i /h /y

echo Copying contents from "%version%\shaderpacks\" to shaderpacks\"...
xcopy "%version%\shaderpacks\*" "shaderpacks\" /s /e /i /h /y

echo(

:: Run Fancyfetch

echo Download Fancymenu assets...
::curl -L -o "file_list.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods/file_list.txt"
call "fancyfetch.bat"

:: Run Modfetch

echo Downloading latest mods...
curl -L -o "file_list.txt" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods/file_list.txt"
call "modfetch.bat"

:: Update mod folder file_list

@echo off
pushd "%~dp0mods"
call "+filelister.bat"
popd

:: Delete the update zip and folder

echo(
echo Removing update files...
rmdir /s /q "update"
del /f /q "ProjectEconomy-latest.zip"

:: Clean up and update version controller

del /f /q "mods\+filelister.bat"
del /f /q "mods\file_list.txt"
del /f /q "current_version.txt"
del /f /q "file_list.txt"
for %%F in (*".version") do (
    del "%%F"
)
copy /y nul %VERSION_CHECK%.version

endlocal
