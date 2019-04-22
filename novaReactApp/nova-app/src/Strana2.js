import React from 'react'
import {Switch,Route } from 'react-router-dom'
import SviZaposleni from './SviZaposleni'
import Zaposleni from './Zaposleni'

const Strana2 = () => (
    <Switch>
        <Route exact path = '/Strana2' component = {SviZaposleni} />
        <Route path = '/Strana2/:number' component = {Zaposleni} />
    </Switch>
)
export default Strana2