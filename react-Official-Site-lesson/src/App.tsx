import './App.css'
import { Click } from './components/Click'
import { ConditionalRendering } from './components/ConditionalRendering'

import { Object } from './components/Object'

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
    </div>
  )
}

export default App
