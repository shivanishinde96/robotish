import React from 'react'
import './card.styles.css'
const Card = (props) => {
    console.log(props.id)
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.m.id}?set=set2`} alt="monster"/>
           <h1>{props.m.name}</h1> 
        </div>
    )
}

export default Card
