@echo off
setlocal

echo PROJECTECONOMY - Updater implementation by xDEFCONx
echo ---------------------------------------------------

:: Version checking

set "VERSION_URL=https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest"
curl -L -o "current_version.txt" "%VERSION_URL%"
set /p VERSION_CHECK=<currentversion.txt
if exist "%VERSION_CHECK%.version" (
    del /f /q "current_version.txt"
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
del /q "config\*" >nul 2>&1
for /d %%D in ("config\*") do rd /s /q "%%D"

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

:: Run Modfetch

echo Downloading latest mods...

set "MOD_FILE_LIST=https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/mods"
curl -L -o "file_list.txt" "%MOD_FILE_LIST%"
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

del /f /q "current_version.txt"
for %%F in (*".version") do (
    del "%%F"
)
copy /y nul %VERSION_CHECK%.version

endlocal
pause