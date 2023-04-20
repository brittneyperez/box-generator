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
        setColor("") // reset input to empty
    };
    
    const handleColor = (e) => {
        setColor(e.target.value);
    }
    
    return (
        <div className="col-md-12 p-4 border rounded bg-light">
            <h2 className="text-center mb-3">Box Generator</h2>
            <form onSubmit={ submitHandler }>
                <div className="row mb-3">
                    <label htmlFor="color" className="col-2 col-form-label"><strong>Color:</strong></label>
                    <div className="col-8">
                        <input type="text" name="color" className="form-control" onChange={ handleColor } value={ color } placeholder='enter color (e.g., lavenderblush)' />
                    </div>
                    <button className="btn btn-outline-dark col-2">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;