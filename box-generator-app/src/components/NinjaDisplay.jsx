import React from 'react';

const NinjaDisplay = (props) => {
    // using the getter and setter that were passed from my parent (App.js) component
    const { ninjaBoxArray } = props;

    /* Display the values held in state - 
        the ninjaBoxArray will update when the form is submitted 
        When state is updated, it will cause this component to re-render this content
    */
    return (
        <div className='col-12 rounded-bottom bg-light mb-3'>
        {
            ninjaBoxArray.map((box, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: box.size, 
                width: box.size, 
                backgroundColor: box.color
                }}>
            </div>
            ))
        }
        </div>
    );
}

export default NinjaDisplay;