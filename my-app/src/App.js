import React from 'react';
import List from './Component/list'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from './Component/Modal/modal'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route path='/' exact component={List} />
                <Route path='/users/:id' component ={Modal} />

            </BrowserRouter>

        </>
    )
};

export default App;

