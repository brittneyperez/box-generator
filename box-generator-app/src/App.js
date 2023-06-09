import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {
  // holding an array of strings for the colors input
  const [ boxColorArray, setBoxColorArray ] = useState( [] );
  
  /*
    * Ninja Bonus: Add a second input that takes in an integer.
    This integer will allow the user to specify the
    height and width of the generated box. Use an
    object to hold both the integer and the color together
  */
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState( [] );
  
  return (
    <div className="App">
      <div className="bg-dark">
        <h1 className='mb-3 text-light'>Practice Assignment</h1>
        <div className='container mx-auto'>
            <div id='box-generator'>
              <Form
                boxColorArray={ boxColorArray }
                setBoxColorArray={ setBoxColorArray }
              />
              <Display boxColorArray={ boxColorArray } />
            </div>
            <hr />
            <div id='ninja-bonus'>
              <NinjaForm ninjaBoxArray={ ninjaBoxArray }
                setNinjaBoxArray={ setNinjaBoxArray } />
              <NinjaDisplay ninjaBoxArray={ ninjaBoxArray } />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
