import React, { useState } from 'react'

const NinjaForm = ( props ) => {
    // using the getter and setter that were passed from my parent (App.js) component
    const { ninjaBoxArray, setNinjaBoxArray } = props;
    
    /* create state that can only be seen by this component
    this is the state to keep track of the text box input value */
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState("");
    
    const submitHandler = (event) => {
        /* prevent the browser from refreshing the page when a form is submitted
        if not prevented the default behaviour will cause us to lose all values in state */
        event.preventDefault();
        
        /* add our new box object to the ninjaBoxArray WITHOUT losing what is already in there
        we need to create a new array and spread out the current objects first
        then we need the new box object as the last element in the array */
        setNinjaBoxArray( [
            ...ninjaBoxArray, {
                color: color,
                // be sure to add the px to the string so it can update the style correctly
                size: size + 'px',
            }
        ] );
        
        /* Ninja Bonus: clear out the color input and reset to the default size value on successful submission 
        This makes it easier to add new color once we submit the first one */
        setColor("");
        setSize(50);
    };
    
    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleSize = (e) => {
        setSize(e.target.value);
    }
    
    return (
        <div className="col-12 p-2 border rounded bg-light">
            <h2 className="text-center my-3">Ninja Bonus</h2>
            <form onSubmit={ submitHandler }>
                <div className="row mb-3">
                    <label htmlFor="color" className="col-4 col-form-label"><strong>Color:</strong></label>
                    <div className="col-8">
                        {/* Ninja Bonus: clear out the color input on successful submission
                            By setting our input value to be the value in state, we can reset 
                            it after successful submission */}
                        <input type="text" name="color" className="form-control" onChange={ handleColor } value={ color } placeholder='enter color (e.g., aliceblue)' />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="color" className="col-4 col-form-label"><strong>Width & Height:</strong></label>
                    <div className="col-8">
                        {/* Ninja Bonus: clear out the size input on successful submission 
                            By setting our input value to be the value in state, we can reset 
                            it after successful submission.*/}
                        <input type="text" name="size" className="form-control" onChange={ handleSize } value={ size } placeholder='number in pixels' />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-dark col-2">Add</button>
                </div>
            </form>
        </div>
    )
}

export default NinjaForm;