import React from 'react'
import {Link} from "react-router-dom"

const FullRoster = () => {
    return(
        <div>
            <ul>
                <li><Link to="/roster/1">Player 1</Link></li>
            </ul>
        </div>
    )
}

export default FullRoster;