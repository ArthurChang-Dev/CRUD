import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Checkbox, Container, Grid, Input, Label, Message } from 'semantic-ui-react';

function ToDoItem(props) {
    return (
        <Grid>
            <Grid.Column width={1} verticalAlign="middle">
                <Checkbox id={props.item.id} />
            </Grid.Column>
            <Grid.Column width={10}>
                <Message id={props.item.id} content={props.item.value} style={{"word-wrap": "break-word"}} />
            </Grid.Column>
        </Grid>
    )
}

function  MainCard() {
    const [toDoList, setToDoList] = useState([]);
    const [curToDo, setCurToDo] = useState("");

    const addTodo = () => {
        setToDoList(toDos => [
            {
                id: toDos.length,
                value: curToDo
            },
             ...toDos]);
        setCurToDo("");
    }

    return (
        <Card style={{width: "40%"}}>
            <Card.Content textAlign={'center'}>
                <Card.Header>ToDo List</Card.Header>
            </Card.Content>
            <Card.Content>
                <Grid>
                    <Grid.Column width={12}>
                        <Input fluid placeholder="To do" value={curToDo} onChange={(e) => setCurToDo(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button primary onClick={addTodo}>Add</Button>
                    </Grid.Column>
                </Grid>
            </Card.Content>
            <Card.Content>
                <Container>
                    <div>
                        {toDoList.map(item => (
                            // <Grid.Row><Grid.Column></Grid.Column></Grid.Row> 
                            // <Message content={item} style={{"word-wrap": "break-word"}} />
                            <ToDoItem item={item} />
                        ))}
                    </div>
                </Container>
            </Card.Content>
        </Card>
    )
}



export default MainCard;