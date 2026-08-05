@echo off
chcp 65001 >nul
title WarOfAsia 本地戰情室伺服器啟動器

echo ========================================================
echo   ⚔️  WarOfAsia 亞太戰略兵推與動態預警模擬器
echo ========================================================
echo.
echo [1/2] 正在啟動本地 Web 伺服器 (Port 8080)...
echo [2/2] 正在為您開啟預設瀏覽器...
echo.

start http://localhost:8080/dashboard/index.html
python -m http.server 8080

pause
