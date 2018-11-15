import React, { Component } from 'react'
import '../css/main.css'
import '../App.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import poker from '../graphics/poker.png'
import leaderboard from '../graphics/leaderboard.png';
import changePageAction from '../actions/page'
import home from '../graphics/home.png'
class Sidebar extends Component {
    render() {
        return (
            <div className='App'>
                <nav className='side-bar'>
                    <Link className='link' to='/'><img className={'icon ' + (this.props.page == 'home' || 'unselected') }  onClick={(e) => this.changePage(e,'home')} src={home}></img></Link>
                    <Link className='link' to='/leaderboard'><img className={'icon ' + (this.props.page == 'leaderboard' || 'unselected') } onClick={e => this.changePage(e,'leaderboard')} src={leaderboard}></img></Link>
                    <Link className='link' to='/game'><img className={'icon ' + (this.props.page == 'game' || 'unselected') } onClick={e => this.changePage(e,'game')} src={poker}></img></Link>
                </nav>
            </div>
        )
    }
    changePage = (e,page) =>
    {
        this.props.dispatch(changePageAction(page))
    }


}
const mapStateToProps = (state) =>
{
    return (
        {
            page:state.pageReducer.page 
        }
    )
       
}
export default connect(mapStateToProps)(Sidebar);
