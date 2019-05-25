import React from 'react'

import TicTacGame from '../components/TicTac/TicTacGame.jsx'
export default class TicTacPage extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className='home-page_wrapper'>
                <TicTacGame />
            </div>
        )
    }
}