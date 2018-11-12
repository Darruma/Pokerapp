import React, { Component } from 'react'

import '../css/cards/cards.css'

class Card extends Component {
    render() {
        const card = `card rank-${this.props.rank} ${this.props.suit}`

        return (<a className={card} >
            <span className='rank'>{this.props.rank.toUpperCase()}</span>
            <span className='suit'>{this.suitUnicode(this.props.suit)}</span>
        </a>)
    }

    suitUnicode = (suit) => {
        switch (suit) {
            case 'hearts':
                return '\u2665'
            case 'clubs':
                return '\u2663'
            case 'diams':
                return '\u2666'
            case 'spades':
                return '\u2660'
            default:
                return 'error'
        }
    }
}
export default Card;
