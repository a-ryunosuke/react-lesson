import { createContext, useEffect, useState } from 'react';
import { Child } from './components/context/Child';
import { ReducerButton } from './components/reducer/ReducerButton';
import { RHF } from './components/rhf/RHF';

export const MyContext = createContext<string | undefined>(undefined);
// <string | undefined>(undefined)-stringのみだとバグに気づけないのでundefinedをあえて許容する

export function App() {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    console.log("ああああ")
  },[])
  
  return (
    <MyContext.Provider value={"Context-value"}>
      <div className='bg-green-400 h-screen w-screen flex flex-col items-center justify-center text-center'>
        <Child />
          <p className="text-teal-800">{number}</p>
          <button className='border-3' onClick={() => setNumber(number + 1)}>+1</button>
          <button onClick={() => setNumber(number - 1)}>-1</button>
        <Child />
        <br />
        <ReducerButton />
        <br />
        <RHF />
        <br />
      </div>
    </MyContext.Provider>
  )
}