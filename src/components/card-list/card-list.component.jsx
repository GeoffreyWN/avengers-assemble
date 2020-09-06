import React from 'react'
import './card-list.styles.css'

import Card from '../card/card.component'

 const CardList = props => {
    return  (
        <div className="card-list">
            {props.avengers.map((avenger) => <Card key={avenger.id} avenger={avenger}/> )}
        </div>
    )
    
}

export default CardList