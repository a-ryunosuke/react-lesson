import { createContext } from 'react';
import { Chaild } from './components/Chaild';

export const MyContext = createContext("App.tsx-text");

export function App() {
  return (
      <Chaild />
  )
}