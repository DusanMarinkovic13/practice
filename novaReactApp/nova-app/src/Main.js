import React from 'react'
import {Switch,Route } from 'react-router-dom'
import Home from './Home';
import Strana2 from './Strana2';
import Lista from './Lista'

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path='/Strana2' component={Strana2}/>
            <Route path='/Lista' component = {Lista}/>
        </Switch>
    </main>
)

export default Main