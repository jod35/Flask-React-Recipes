import React from 'react'
import { Card } from 'react-bootstrap';


const Recipe=({title,description})=>{
    return(
        <Card className="recipe">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>{description}</p>
            </Card.Body>
        </Card>
    )
}


export default Recipe;