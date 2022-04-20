import * as React from 'react'
import styled from 'styled-components'

//useState関数をReactから取り出す
const {useState} = React

const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

//Editor＝React.FC型（関数コンポーネントの略）→Reactのコンポーネントを返す
//React.FCで定義された関数は、JSXで<Editor>という形式で呼び出すことができる
export const Editor:React.FC = () => {
    //状態を管理する処理
    const [text, setText] = useState<string>('')
    return(
        //<>のタグ＝<React.Fragment>を短縮した書き方→Reactコンポーネントでは1つの要素を返却しなければならないから
        <>
        <Header>
            Markdown Editor
        </Header>
            <Wrapper>
                {/*textareaの各属性に状態に関する処理を書く*/}
                {/*属性：onChange＝テキストの内容が変更されたときに実行される関数を渡す、引数としてeventが渡される*/}
                {/*event.target.valueにテキストの内容が格納されている*/}
                {/*属性:valueにはテキストの内容を渡す、ここではuseStateで管理しているtextという変数を返す*/}
                <TextArea
                    onChange = {(event) => {
                        setText(event.target.value)
                    }}
                    value = {text}
                />
                <Preview>プレビューエリア</Preview>
            </Wrapper>
        </>
    )
}
