import React, { Component } from 'react'
import '../css/piechart.css'
import PieChart from 'react-minimal-pie-chart';
class WinsChart extends Component {

    render() {

        return (<div>
            <PieChart radius={25}
                data={[
                    { title: 'Wins', value: this.props.wins, color: '#0dc441' },
                    { title: 'Draws', value: this.props.draws, color: '#d7f226' },
                    { title: 'Losses', value: this.props.losses, color: '#c11b1b' },
                ]}
            />
        </div>
        )
    }
}
export default WinsChart;