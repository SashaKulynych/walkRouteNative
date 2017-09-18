'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorRoutes } from '../navigationConfiguration'
import { View } from 'react-native'
//Redux
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        navigationState: state.routesStack
    }
}
class RoutesNavigation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Routes'
    }
    render(){
        const { dispatch, navigationState} = this.props
        return (
            <NavigatorRoutes
                navigation={addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState
                })}
            />
        )
    }
}

export default connect(mapStateToProps)(RoutesNavigation)
