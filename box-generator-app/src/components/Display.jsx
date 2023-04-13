import React from 'react'

const Display = ( props ) => {
    // using the getter that was passed from the parent (App.js) component
    const { boxColorArray } = props;
    
    /* Display the values held in state – the boxColorArray will update when the form is submitted. When state is updated, it will cause the component to re-render this content */
    return (
        <div>
            {
                boxColorArray.map((color, index) => (
                    <div key={ index } style={{
                        display: 'inline-block',
                        margin: '10px',
                        height: '50px',
                        width: '50px',
                        backgroundColor: color
                    }}></div>
                ))
            }
        </div>
    )
}

export default Display;