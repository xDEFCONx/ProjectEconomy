@echo off
setlocal EnableDelayedExpansion

:: Run updater

if exist "Updater.bat" (
    call "Updater.bat"
) else (
    echo Updater not found. Obtaining from the repository...
    curl -L -o "Updater.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/UPDATER.bat"
    call "Updater.bat"
    pause
)

:: Locate MinecraftLauncher.exe

for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    set "launcherPath=%%D:\Program Files (x86)\Minecraft Launcher\MinecraftLauncher.exe"
    if exist "!launcherPath!" (
        start "" "!launcherPath!"
        goto :eof
    )
)

echo MinecraftLauncher.exe not found in Program Files(x86) on any drive.
pause