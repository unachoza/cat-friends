import React from 'react'

const Scroll = (props) => {
return(
    <div style={{overflow: 'scroll', border: '5px solid black', height: '800px', width: "900px", margin: 'auto'}}>
        {props.children}
    </div>
)
}

export default Scroll