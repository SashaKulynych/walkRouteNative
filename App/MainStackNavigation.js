'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorMain } from './navigationConfiguration'
//Redux
import { connect } from 'react-redux'
import {checkData} from './AllData'
const mapStateToProps = (state) => {
    return {
        navigationState: state.mainStack,
        userData:state.userData
    }
}
class MainStackNavigation extends React.Component {
    componentWillMount(){
        checkData()
    }
    render(){
        const { dispatch, navigationState} = this.props;
        return (
            <NavigatorMain
                navigation={addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState
                })}
            />
        )
    }
}

export default connect(mapStateToProps)(MainStackNavigation)
