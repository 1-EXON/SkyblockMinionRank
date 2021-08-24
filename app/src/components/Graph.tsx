import React, { Component } from 'react'
import axios from 'axios'

export default class Graph extends Component {
    async useEffect() {
        const res = await axios.get('https://api.hypixel.net/skyblock/bazaar?key=aaf9eced-aa8e-4eac-945f-d0410da7ecd7')
        console.log(res)
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
