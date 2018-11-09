import React, { Component } from 'react'
import '../css/poker.css'
import Card from './Card'
import Enemies from './Enemies'
class Game extends Component {
    render() {
        return (
            <div>

                <div className='poker-container'>
                    <Enemies></Enemies>
                    <div className='poker-table'>
                        <div className='board-cards playingCards table'>
                            <Card suit='diams' rank='q' ></Card>
                            <Card suit='diams' rank='q' ></Card>
                            <Card suit='diams' rank='q' ></Card>
                        </div>
                    </div>
                    <div className='poker-ui playingCards'>
                        <Card suit='diams' rank='q' ></Card>
                        <Card suit='diams' rank='q' ></Card>
                        <div className='play-buttons'>
                            <button className='poker-button'>Fold</button>
                            <button className='poker-button'>Check</button>
                            <button className='poker-button'>Raise</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

export default Game;
