import React, {Componenet} from 'react'
import {robots} from './robots'

const Card = (props) => {
    const {name, email, id} =  props
    return(
        <div className= "card"> 
            <div class="bg-light-green br3 pa3 ma3 grow bw2 shadow-5 ">
                <img alt="" src={`https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed=${id}`} width="200" border-radius="10"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}
export default Card