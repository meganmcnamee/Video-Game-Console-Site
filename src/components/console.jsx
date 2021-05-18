import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function Console(props){
    const [console, setConsole] = useState(null);
    const {id} = props;
    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
        });
    }, []);

    if(!console) {
        return( <p>Proceeding..
            <img src="https://24.media.tumblr.com/359a426070e1839c0a00243e7ddc8425/tumblr_n0g2rk5SWw1rikiwao1_500.gif" alt="pika and pichu "/>
            </p>)
    };

    return( <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={console.image} />
    <Card.Body>
      <Card.Title>{console.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Price: ${console.price}</ListGroupItem>
      <ListGroupItem>Country: {console.country}</ListGroupItem>
      <ListGroupItem>Year: {console.releaseYear}</ListGroupItem>
    </ListGroup>
  </Card>
    );
}

export default Console;