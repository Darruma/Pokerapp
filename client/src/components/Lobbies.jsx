import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectLobbyAction, getLobbiesAction } from '../actions/lobby';
import Lobby from './Lobby'
class Lobbies extends Component {
    render() {
        return <div>
            {
                this.props.lobbyData.map((element, index) => {
                    <Lobby type={element.type}
                        playerAmount={element.amount}
                        gameStatus={element.gameStatus}
                        onClick={(e) => selectLobbyAction(index)}>
                    </Lobby>
                }
                )
            }
        </div>
    }
    componentWillMount = () =>
    {
        this.props.dispatch(getLobbiesAction())
    }
}

const mapStateToProps = (state) => {
    return {
        lobbyData: state.lobbyReducer.lobbies,
        selected: state.lobbyReducer.selected
    }
}
export default connect(mapStateToProps)(Lobbies);