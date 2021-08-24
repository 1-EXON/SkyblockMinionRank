/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Graph from './components/Graph'

import logo from './images/logo.png'
import box from './images/box.png'
import './App.css'

function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} />
            </div>
            <div className="main">
                <h1>Skyblock Minions Rank</h1>
                <h2>Easy Skyblock Minions Rank</h2>
                <img src={box} />
                <Graph />
            </div>
        </div>
    )
}

export default App;
