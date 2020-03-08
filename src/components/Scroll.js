import React from 'react'

const Scroll = (props) => {
return(
    <div style={{overflow: 'scroll', border: '4px solid black', height: '74vh', width: "900px", margin: 'auto', justifyContent: 'center'}}>
        {props.children}
    </div>
)
}

export default Scroll