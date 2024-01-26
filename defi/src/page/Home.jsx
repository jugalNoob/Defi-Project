import React from 'react'
import { NavLink } from 'react-router-dom'
import useStore from './store'
function Home() {
  const counter = useStore((state) => state.counter);
 
  const { increasecounter, dncreasecounter, restes ,setColor } = useStore();

  return (
    <div>
<h1>{counter}</h1>
      <button onClick={increasecounter}>Add</button>
      <button onClick={dncreasecounter}>Des</button>
      <button onClick={restes}>Reset</button>
<h1>jugal sharma</h1>
<NavLink to="/form">home</NavLink>
    </div>
  )
}

export default Home