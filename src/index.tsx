import * as React from 'react'
import { render } from 'react-dom'
//styled-components の createGlobalStyle を使って、ページ全体に適用できるスタイルを定義している
import { createGlobalStyle } from 'styled-components'
//エディタ画面（editor.tsx）をインポートして表示させるための記述
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `

const Main = (
    <>
        <GlobalStyle />
        <Editor />
    </>
)

render(Main, document.getElementById('app'))