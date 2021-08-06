import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Checkbox, Container, Grid, Input, Label, Message } from 'semantic-ui-react';

function ToDoItem({item}) {
    return (
        <Grid>
            <Grid.Column width={1} verticalAlign="middle">
                <Checkbox id={item.id} />
            </Grid.Column>
            <Grid.Column width={10}>
                <Message id={item.id} content={item.name} style={{"word-wrap": "break-word"}} />
            </Grid.Column>
        </Grid>
    )
}

function  MainCard() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [toDoList, setToDoList] = useState([]);
    const [curToDo, setCurToDo] = useState("");
    const [error, setError] = useState(false);

    const addTodo = () => {
        setToDoList(toDos => [
            {
                id: toDos.length,
                name: curToDo,
                isComplete: false
            },
             ...toDos]);
        setCurToDo("");
    }

    useEffect(() => {
        fetch("https://localhost:5001/api/todoitems")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setToDoList(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    if(error) {
        return <div>Error: {error.Message}</div>
    }
    else if(!isLoaded) {
        return <div>Loading...</div>
    }
    else {
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
                                <ToDoItem key={item.id} item={item} />
                            ))}
                        </div>
                    </Container>
                </Card.Content>
            </Card>
        )
    }
}

export default MainCard;