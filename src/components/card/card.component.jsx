import React from 'react';
import './card.styles.css';

const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.avenger.id}?set=set5&size=180x180`} alt="strongest avenger"/>
        <h2> { props.avenger.name}</h2>
        <p>{props.avenger.email}</p>
        <p>{props.avenger.username}</p>
    </div>
)

export default Card