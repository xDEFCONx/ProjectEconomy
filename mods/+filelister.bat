:: Creates .txt with all mod filenames for compare

@echo off
>file_list.txt (
  for /R %%f in (*.jar) do @echo %%~nxf
)