import './App.css'
import { Click } from './components/Click'
import { ConditionalRendering } from './components/ConditionalRendering'
import { ListRender } from './components/ListRender'

import { Object } from './components/Object'
import { PureFunction } from './components/PureFunction.'
import { EventHandler } from './interactivity/EventHandler'
import { Interactivity } from './interactivity/Interactivity'

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
      <br />
      <Interactivity />
      <br />
      <EventHandler />
    </div>
  )
}

export default App
