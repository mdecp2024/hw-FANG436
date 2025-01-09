var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-FANG436 \n 個人網站: https://mdecp2024.github.io/hw-FANG436/content/index.htmll \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '分享X。 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目1: \n 題目2: \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n 圓形 \n 像素圓型 \n \n \n \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': 'print和for迴圈做10個程式 \n 要chatGPT幫我用print和for迴圈做10個程式後，再到Brython和Jupyter lab執行。 \n Ai會使的人類更加懶散，不知不覺就會把遇到的問題丟給Ai處理。 \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n  導入 brython 程式庫  \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n 建立畫布 \n \n \n html.CANVAS(width=500, height=500): 建立一個 500x500 像素的 HTML 畫布。 \n brython_div = doc["brython_div1"]: 將畫布加到 HTML 中一個 ID 為 brython_div1 的容器。 \n brython_div <= canvas: 把畫布元素添加到容器中。 \n return canvas: 返回建立的畫布對象。 \n \n 畫圖函式 \n \n ctx = canvas.getContext("2d") : 獲取 2D 繪圖上下文，用於畫圖。 \n ctx.lineWidth = 4 : 設定線條寬度為 4。 \n \n 混合模式 \n \n ctx.globalCompositeOperation = "screen" : 設定混合模式為 \xa0 screen ，用於實現顏色混合效果。 \n \n 繪製第一個圓形 \n \n ctx.strokeStyle = \'black\' : 設定圓形邊框顏色為黑色。 \n 定義 \xa0 colors1 \xa0 和 \xa0 angles1 ，分別表示每個圓弧的顏色和起止角度。 \n for i in range(4): : 繪製四段圓弧。 \n ctx.arc(160, 160, 141, angles1[i][0], angles1[i][1]) : 繪製圓弧，圓心在 \xa0 (160, 160) ，半徑為 141。 \n ctx.fillStyle = colors1[i] : 設定填充顏色。 \n ctx.fill() : 填充圓弧內部。 \n ctx.stroke() : 描繪圓弧邊框。 \n \n 繪製第二個圓形 \n \n 與第一個圓相同，繪製第二個圓，但位置為 \xa0 (260, 260) ，並使用 \xa0 colors2 \xa0 和 \xa0 angles2 \xa0 定義的顏色與角度。 \n \n 繪製第一個方形中的三角形 \n \n \n 設定邊框顏色為紅色。 \n 使用 \xa0 coords1 \xa0 定義第一個方形內的兩個三角形頂點與填充顏色。 \n ctx.moveTo(*coord[0]) : 移動畫筆到三角形的第一個頂點。 \n ctx.lineTo(*coord[1]) \xa0 和 \xa0 ctx.lineTo(*coord[2]) : 繪製兩條邊。 \n ctx.fillStyle = coord[3] : 設定三角形填充顏色。 \n ctx.fill() \xa0 和 \xa0 ctx.stroke() : 填充與描邊。 \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w15', 'text': '題目1 \n sum_result = 0 #建立變數sum_result\ni = 1 #指定i等於1\nwhile i <= 100: #使用while迴圈把i加到等於100\nsum_result += i\ni += 1\nprint(sum_result) \n 從 1 累加到 100 \n 說明: \n \n \n sum_result = 0 ：這是用來存放累加結果的變數，初始為 0。 \n i = 1 ：這是計數器，從 1 開始。 \n while i <= 100: ：這個  while  迴圈會一直執行，直到  i  大於 100 為止。 \n sum_result += i ：將當前的  i  值加到  sum_result  上。 \n i += 1 ：每次迴圈執行時， i  會增加 1。 \n print(sum_result) ：最後將累加結果輸出。 \n \n \n 題目2 \n def addto(start, end):\n    sum_result = 0  # 初始化累加結果\n    i = start  # 設定 i 為開始值\n    while i <= end:  # 使用 while 迴圈直到 i 超過結束值\n        sum_result += i  # 將 i 加到 sum_result 中\n        i += 1  # i 每次增加 1\n    return sum_result  # 返回最終的累加結果\n\n# 呼叫 addto 函式，傳入 1 和 100，並印出結果\nresult = addto(1, 100)\nprint(result)\n \n addto \n 說明: \n \n \n def addto(start, end): ：這是函式的定義， start  是起始數字， end  是結束數字。 \n sum_result = 0 ：初始化累加變數  sum_result ，從 0 開始。 \n i = start ：設定計數器  i  為起始數字。 \n while i <= end: ： while  迴圈會持續執行，直到  i  大於結束值  end 。 \n sum_result += i ：將當前的  i  值加到  sum_result  中。 \n i += 1 ：每次迴圈執行時， i  增加 1。 \n return sum_result ：當迴圈結束後，返回累加的結果。 \n \n \n 題目3 \n def add_only_even(start, end):\n    sum_result = 0  # 初始化累加結果\n    for i in range(start, end + 1):  # 使用 for 迴圈從 start 到 end (包含 end)\n        if i % 2 == 0:  # 如果 i 是偶數\n            sum_result += i  # 將偶數加到 sum_result 中\n    return sum_result  # 返回最終的累加結果\n\n# 呼叫 add_only_even 函式，傳入 1 和 100，並印出結果\nresult = add_only_even(1, 100)\nprint(result)\n \n add_only_even \n 說明: \n \n \n def add_only_even(start, end): ：這是函式定義， start  和  end  參數是範圍的開始和結束值。 \n sum_result = 0 ：初始化一個變數  sum_result ，用來累加符合條件的數字（偶數）。 \n for i in range(start, end + 1): ：這個  for  迴圈會遍歷從  start  到  end （包括  end ）之間的所有數字。 \n if i % 2 == 0: ：這是條件判斷式，用來檢查當前的數字  i  是否是偶數。如果  i  除以 2 的餘數為 0，就代表它是偶數。 \n sum_result += i ：如果  i  是偶數，就將它加到  sum_result  變數中。 \n return sum_result ：當迴圈結束後，返回累加的結果。 \n \n 題目4 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '題目: 請以自己的學號最後四碼作為繪圖的座標原點, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (39, 32)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像 (圖片來源). \n anchor \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w16_exam2', 'text': '題目一: 請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用\xa0 pixel=2 的藍色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像). \n w16_exam2 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n \n 期末書面專題報告檔案 (pdf): \n 期末PDF \n 電腦輔助設計與實習課程總結心得: \n 十分耗費頭腦、精力和時間的一門課程，原本理所當然的認為只要會上網查資料就行了，程式碼什麼不重要 、 不關我的事，但接觸程式碼後，我開始尊敬起那些設計程式的開發人員，實在是很偉大，沒有你們的話我的生活就不會如此方便。 \n 期末報告自評成績:68 \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};