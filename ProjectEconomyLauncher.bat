@echo off
setlocal EnableDelayedExpansion

:: Curl/call updater

curl -L -o "Updater.bat" "https://raw.githubusercontent.com/xDEFCONx/ProjectEconomy/latest/UPDATER.bat" --ssl-no-revoke
call "Updater.bat"

:: Locate MinecraftLauncher.exe

for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    if exist "%%D:\Program Files (x86)\Minecraft Launcher\MinecraftLauncher.exe" (
        start "" "%%D:\Program Files (x86)\Minecraft Launcher\MinecraftLauncher.exe"
        goto :eof
	)
)

for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    if exist "%%D:\XboxGames\Minecraft Launcher\Content\Minecraft.exe" (
        start "" "%%D:\XboxGames\Minecraft Launcher\Content\Minecraft.exe"
        goto :eof
	)
)