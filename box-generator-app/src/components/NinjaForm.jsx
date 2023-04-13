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
    
    return (
        <div className='container-fluid justify-content-between p-2 col-md-4'>
            <form onSubmit={ submitHandler }>
                <div className="form-group">
                    <label>Color</label>
                    {/* 
                    Ninja Bonus: clear out the color input on successful submission
                    By setting our input value to be the value in state, we can reset 
                    it after successful submission
                    */}
                    <input className='form-control' type="text" name="color" value={ color }
                    onChange={ (e) => setColor(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Width and Height in Pixels</label>
                    {/* 
                    Ninja Bonus: clear out the size input on successful submission 
                    By setting our input value to be the value in state, we can reset 
                    it after successful submission.
                    */}
                    <input className='form-control' type="text" name='size' value={ size }
                    onChange={ (e) => setSize(e.target.value) } />
                </div>
                <button className="btn btn-info">Add</button>
            </form>
        </div>
    )
}

export default NinjaForm;