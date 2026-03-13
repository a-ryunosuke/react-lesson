import './App.css'
import {PromiseThen} from "./component/PromiseThen"
import { ReactMemo } from "./component/ReactMemo"
import { AsyncAwait } from './component/AsyncAwait'

function App() {
  return (
    <>
    <PromiseThen />
    <br />
    <ReactMemo />
    <br />
    <AsyncAwait />
    </>
  )
}

export default App
