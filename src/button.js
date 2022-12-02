import React, { useState } from 'react';

export default function Button(props) {
    const [hovering,changeHover] = useState(false);

    console.log('button',props)

    const buttonStyle = {
        borderRadius: '5px',
        backgroundColor: 'white',
        padding: '5px 15px',
        color: 'black',
        fontSize: '10pt',
        cursor: 'pointer',
        minWidth: '100px',
        
    }

    const buttonHover = {
        ...buttonStyle,
        backgroundColor: 'gray',
        color: 'white',
        border: '1px solid white'
    }

    return <button  onMouseEnter={()=>changeHover(true)} 
                    onMouseLeave={()=>changeHover(false)} 
                    style={(hovering)?buttonHover:buttonStyle} 
                    onClick={()=>props.changeView(props.next,props.username)}>
            {props.text}
            </button>
}