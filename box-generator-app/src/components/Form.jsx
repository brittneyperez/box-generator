import React, { useState } from 'react'

const Form = ( props ) => {
    // using the getter and setter that were passed from my parent (App.js) component
    const { boxColorArray, setBoxColorArray } = props;
    
    // create state that can only be seen by this component
    // this is the state to keep track of the text box input value
    const [ color, setColor ] = useState("");
    
    const submitHandler = ( event ) => {
        // prevent the browser from refreshing the page when a form is submitted
        // otherwise, the default behaviour will cause it to lose all values in the state
        event.preventDefault();
        
        // add new color to the boxArray WITHOUT losing what is already in there
        // we need to create a new array and spread out the current values first
        // then we add the new color as the last element in the array
        setBoxColorArray([ ...boxColorArray, color ]);
    };
    
    return (
        <div className='container-fluid justify-content-between p-2 col-md-4'>
            <form onSubmit={ submitHandler }>
                <div className='form-group'>
                    <label htmlFor="firstName">Color:</label>
                    <input className='form-control' type="text" name="color" onChange={ (e) => setColor(e.target.value) } />
                </div>
                <button className="btn btn-info">Add</button>
            </form>
        </div>
    )
}

export default Form;