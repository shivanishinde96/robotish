import React from 'react'
import './card-list.style.css'
import Card from '../card/card'
const CardList=(props)=> {
    //console.log(props)
    return (
        <div className="card-list" >
        {props.monsters.map((m)=><Card key={m.id} m={m}/>)}
        </div>
    )
}
export default CardList