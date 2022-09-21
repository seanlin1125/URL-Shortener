# 短網址產生器
一個把網址縮短的網站
## 功能
+ 使用者可以在首頁表單輸入原始網址，如 https://www.google.com
；送出表單之後，畫面會回傳格式化後的短網址，如 http://localhost:3000/LkbZx
+ 使用者可以在瀏覽器的網址列輸入短網址（如 http://localhost:3000/LkbZx
），瀏覽器就會導向原本的網站（如 https://www.google.com
）
+ 短網址輸出格式為 5 碼英數組合，如 http://.../**LkbZx**
## 畫面
![](https://github.com/seanlin1125/URL-Shortener/blob/main/images/short-url-home.png)
---
![](https://github.com/seanlin1125/URL-Shortener/blob/main/images/short-url-copyLink.png)
---
![](https://github.com/seanlin1125/URL-Shortener/blob/main/images/short-url-errorMessage.png)
## 安裝使用
1. 複製專案，在終端機輸入：
```
git clone https://github.com/seanlin1125/URL-Shortener.git
```
2. 進入專案資料夾，在終端機輸入：
```
cd URL-Shortener
```
3. 安裝`npm`套件。在終端機輸入：
```
npm install
```
4. 執行專案。在終端機輸入：
```
npm run dev
```
5. 於瀏覽器網址列輸入：
```
localhost:3000
```
## 開發工具
+ Node.js 16.17.0
+ Express 4.18.1
+ Express-Handlebars 6.0.6
+ Bootstrap 5.1.3
+ Font-awesome 6.2.0
+ MongoDB
+ mongoose 6.6.1
