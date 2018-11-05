import React, { Component } from 'react'
import PriceChart from './Pricechart';
import PieChart from './Piechart';
class Statistics extends Component {
    render() {
        return (<div className='statistics'>
            <div className='line-chart'>
                <PriceChart data={this.props.priceData}></PriceChart>
            </div>

            <div className='pie-chart'>
                <PieChart wins={this.props.wins} losses={this.props.losses} draws={this.props.draws}></PieChart>
            </div>
            <div className='tags'>
                <p className='tag'>Wins <i className='green block'></i></p>
                <p className='tag'>Losses <i className='red block'></i></p>
                <p className='tag' > Draws <i className='yellow block'></i> </p>
            </div>
        </div>)
    }

}
export default Statistics;