import {connect} from 'react-redux';
import HomeComponent from './home.component';
import React, {Component} from "react";
import Actions from './home-actions';

class HomeContainer extends Component {
    render() {
        return (
            <HomeComponent
                players={this.props.players}
                isLoading={this.props.isLoading}/>
        );
    }

    componentDidMount() {
        this.props.requestPlayersData();
    }
}

const mapStateToProps = (state) => {
    const {players, isLoading} = state.HomeReducer;
    return {
        players,
        isLoading
    }
};

const mapDispatchToProps = {
    requestPlayersData: Actions.requestPlayersData
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);