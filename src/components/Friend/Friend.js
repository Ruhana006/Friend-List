import {Button} from 'react-bootstrap';
import React from 'react';
import {Card} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email,id } = props.friend;
    const history = useHistory();
    const handleBtn = (id) => {
        const url = `/friend/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div>
                <Card >
                    <Card.Body>
                        <Card.Title><h1>Name : {name}</h1></Card.Title>
                        <Card.Text>
                            <h4>Email : {email}</h4>
                        </Card.Text>
                        
                        <Button onClick={()=> handleBtn(id)} variant="outline-dark">Show Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Friend;