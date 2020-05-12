# Fringeインターン2020 Web React 事前課題

* Usage:起動のための手順
* Features:自己採点
* Note:反省点
* Author:作成者情報
   
# Usage
 
実行方法の手順を説明する

* [babelrc],[eslintrc.json]の名前を[.babelrc],[.eslintrc.json]に変更し、隠しファイルにしてください
* node.jsを予めインストールしてください
 
```bash
git clone https://github.com/f81/intern2022_HarumiKadota.git
cd intern2022_HarumiKadota

npm install react react-dom
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install @babel/core @babel/preset-env @babel/preset-react @babel/cli --save-dev
npm install eslint babel-eslint eslint-loader eslint-plugin-react --save-dev
npm install css-loader style-loader babel-loader --save-dev

npm start
```

https://localhost:8080/ にアクセス

# Features

自己採点(9項目/11項目)

出来なかった項目について、以下に記載する

* 投稿一覧の内容はリロード後も情報は保持される
* 拍手後は、拍手した人の拍手出来るポイントが-2、紹介した/された人には拍手されたポイントが+1される



# Note

反省点

上記の項目が出来なかった理由について記載する

* 'localstorage'を理解出来なかったため、プログラムに実装することが出来なかったから
* ２つ目以降の投稿ボタンによるイベント処理が出来なかったから   
 
# Author
 
作成者情報を列挙する
 
* 作者名: 角田 遼海(カドタ ハルミ)
* 所属: 徳島大学大学院 １年
* E-mail: haruminriku@gmail.com
 