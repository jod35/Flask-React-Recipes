import React from 'react'
import { Button, Card } from 'react-bootstrap';


const Recipe=({title,description,onClick})=>{
    return(
        <Card className="recipe">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>{description}</p>
                <Button variant="primary" onClick={onClick}>Update</Button>
            </Card.Body>
        </Card>
    )
}


export default Recipe;