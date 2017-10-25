import React from 'react'
import { Route,Switch } from 'react-router'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/roster" component={Roster} />
            <Route path="/schedule" component={Schedule} />
        </Switch>
    )
}

export default Main;