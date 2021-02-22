import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Container } from 'semantic-ui-react';

const MainCard = () => (
    <Card>
        <Card.Content>
            <Card.Header>ToDo List</Card.Header>
        </Card.Content>
        <Card.Content>
            <p>input box</p>
        </Card.Content>
        <Card.Content>
            <p>List</p>
        </Card.Content>
    </Card>
)

export default MainCard;