//ライブラリをインポートする宣言
import * as React from 'react'
import { render } from 'react-dom'

//Mainという変数にReactのビューを書いている
const Main = (<h1>Markdown Editor</h1>)

//ReactとHTMLファイルを繋ぐ処理
//appというIDを持つHTML要素に対してMainという変数の内容を紐づける
render(Main, document.getElementById('app'))
