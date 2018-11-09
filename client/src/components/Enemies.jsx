import React, { Component } from 'react'
import Enemy from './Enemy'

class Enemies extends Component {
    render() {
        return (<div className='enemies'>
            <div className='top-side'>
                <Enemy></Enemy>
            </div>
            
             <div className='right-side'>
                <Enemy></Enemy>
            </div>

            <div className='left-side'>
                <Enemy></Enemy>
            </div>



        </div>)
    }
}
export default Enemies