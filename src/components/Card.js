import React from 'react'

const Card = (props) => {
    const {name, email, id} =  props
    return(
        <div className= "card"> 
            <div className="bg-light-green br3 pa3 ma3 grow bw2 shadow-5 ">
                <img alt="" src={`https://robohash.org/${id}?set=set4`} width="200" border-radius="10"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}
export default Card