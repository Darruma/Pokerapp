import React, { Component } from 'react'
import '../css/poker.css'

class Game extends Component {
    render() {
        return (
            <div className='poker-container'>
                <div className='poker-table'>

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
                    <button>Fold</button>
                    <button>Check</button>
                    <button>Raise</button>
                </div>
                </div>



            </div>
        )
    }


}

export default Game;