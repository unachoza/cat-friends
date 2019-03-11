import React, {Componenet} from 'react'

const Card = (props) => {
    return(
        <div class="bg-light-green br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="" src={`https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed=${props.id}`} width="200"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card