import React, { Component } from 'react'
import '../css/poker.css'
import '../css/cards.css'
class Game extends Component {
    render() {
        return (
            <div className='poker-container'>
                <div className='poker-table'>
                    <div className='board-cards'>



                    </div>
                </div>
                <div className='poker-ui'>
                    <div class='im'>
                        <div className='messages'>

                            <p>Lol</p>
                            <p>Lol</p>
                            <p>Lol</p>


                        </div>
                        <textarea className='input-message'></textarea>
                    </div>

                    <div className='play-buttons'>
                        <button className='poker-button'>Fold</button>
                        <button className='poker-button'>Check</button>
                        <button className='poker-button'>Raise</button>
                    </div>
                </div>



            </div>
        )
    }


}

export default Game;