@echo off
setlocal EnableDelayedExpansion

:: Curl/call updater

curl -L -o "Updater.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/UPDATER.bat" --ssl-no-revoke
call "Updater.bat"

:: Locate MinecraftLauncher.exe

for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    set "launcherPath1=%%D:\Program Files (x86)\Minecraft Launcher\MinecraftLauncher.exe"
    set "launcherPath2=%%D:\XboxGames\Minecraft Launcher\Content\Minecraft.exe"
    if exist "!launcherPath1!" (
        start "" "!launcherPath1!"
        goto :eof
    )
    if exist "!launcherPath2!" (
        echo MinecraftLauncher.exe not found in Program Files(x86) on any drive.
        start "" "!launcherPath!"
        goto :eof
    )
    echo Minecraft.exe not found in XboxGames on any drive.
)