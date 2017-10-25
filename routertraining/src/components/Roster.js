import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Player from './Player'
import FullRoster from './FullRoster'

const Roster = ()=> {
    return (
        <div>
            <h2>This is Roster page</h2>
            <Switch>
                <Route exact path='/roster' component={FullRoster}/>
                <Route path='/roster/:number' component={Player} />
            </Switch>
        </div>
    )
}

export default Roster