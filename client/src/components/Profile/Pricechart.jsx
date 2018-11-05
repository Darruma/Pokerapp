import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
class PriceChart extends Component
{   
    render()
    {
        return(
            <div style={{paddingTop:'20px'}}>
               
            <LineChart width={700} height={350} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid></CartesianGrid>
                <Legend />
                <Line dataKey="points"  />
            </LineChart>
            </div>
        )
    }
}
export default PriceChart