import React from 'react';
import ReactDom from 'react-dom';
import { Container } from 'semantic-ui-react';
import MainCard from './MainCard.jsx';

const App = () => {
    return ( 
        <Container>
            <MainCard />
        </Container>
    )
}

ReactDom.render(<App/>, document.getElementById("root"));
