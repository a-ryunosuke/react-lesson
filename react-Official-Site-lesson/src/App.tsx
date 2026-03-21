import './App.css'
import { Click } from './components/Click'
import { ConditionalRendering } from './components/ConditionalRendering'
import { ListRender } from './components/Listrender'

import { Object } from './components/Object'
import { PureFunction } from './components/PureFunction.'

function App() {
  return (
    <div>
      <h1>react-official-lesson</h1>
      <br />
      <Object />
      <br />
      <Click />
      <br />
      <ConditionalRendering />
      <br />
      <ListRender />
      <br />
      <PureFunction />
    </div>
  )
}

export default App
