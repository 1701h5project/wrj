前台：
1.改路径baseUrl   wrj\web\src\assets\common\global.js
2.改路径LOCAL_SERVER    wrj\web\src\utils\httpclient.js
 
后台
1.改路径baseUrl    wrj\api\src\assets\common\global.js
2.改路径LOCAL_SERVER    wrj\api\src\utils\httpclient.js 

数据导入
1.文件的地址：wrj\goods.json       导入语法 mongoimport -d wrj -c goods goods.json
2.后台登录的数据导入  wrj\superaccount.json  导入语法 mongoimport -d wrj -c goods superaccount.json

模块下载
1.web文件下 npm install
2.api文件下 npm install