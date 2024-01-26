import React from 'react';
import useStore from './store';
import './style/form.css';

function Uder() {
  const counter = useStore((state) => state.counter);
  const color = useStore((state) => state.color);
  const { increasecounter, dncreasecounter, restes, setColor } = useStore();

  // Define a dynamic style object for the h1 element
  const h1Style = {
    color: color === 'black' ? 'white' : 'black', // If background is white, text is black, and vice versa
  };
  return (
    <div>
      <div className="allHone">
        <h1>{counter}</h1>
        <button onClick={increasecounter}>Add</button>
        <button onClick={dncreasecounter}>Des</button>
        <button onClick={restes}>Reset</button>
      </div>
      <div className="pages" style={{ backgroundColor: color }}>
        <h1 style={h1Style}>jugal sharma</h1>
        <p style={h1Style}> I am a colored text</p>
      </div>

      <div className="color-buttons">
        <button onClick={() => setColor('1rem')}>Font Size 1rem</button>
        <button onClick={() => setColor('black')}>Black Background</button>
        <button onClick={() => setColor('white')}>White Background</button>
        <button onClick={() => setColor('green')}>Green Background</button>
        <button onClick={() => setColor('pink')}>Pink Background</button>
        <button onClick={() => setColor('blue')}>Blue Background</button>
      </div>
    </div>
  );
}

export default Uder;



// ///!SECTION//!SECTION
// import React from 'react';
// import useStore from './store'
// function Uder() {
//   const counter = useStore((state) => state.counter);
//   const color = useStore((state) => state.color); 
//   const { increasecounter, dncreasecounter, restes ,setColor } = useStore();

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={increasecounter}>Add</button>
//       <button onClick={dncreasecounter}>Des</button>
//       <button onClick={restes}>Reset</button>
//       <p p style={{color}}>i am a corele</p>
  
// <button onClick={() => setColor('blue')}>Blue</button>
// <button onClick={() => setColor('red')}>Red</button>
// <button onClick={() => setColor('green')}>Green</button>
// </div>
//   );
// }

// export default Uder;