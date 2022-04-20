//ライブラリをインポートする宣言
import * as React from 'react'
import { render } from 'react-dom'
import styled from "styled-components";

// //Mainという変数にReactのビューを書いている
// const Main = (<h1>Markdown Editor + dev serve</h1>)

//スタイルングされたコンポーネントを作成
//styled.（htmlのタグ名）で生成したいHTMLタグを指定して、その後続く``内にCSSを記述すると
//そのコンポーネントにスタイルが適応される仕組み
const Header = styled.h1`
   color:red;
   `
const Main = (<Header>Markdown Editor</Header>)

//ReactとHTMLファイルを繋ぐ処理
//appというIDを持つHTML要素に対してMainという変数の内容を紐づける
render(Main, document.getElementById('app'))
