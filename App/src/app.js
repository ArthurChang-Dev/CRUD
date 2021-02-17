import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>React App</h1>
            <h2>ToDo List</h2>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"));
