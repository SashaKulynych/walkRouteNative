'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorRoutes } from '../navigationConfiguration'
import { View } from 'react-native'
import {Icon} from 'native-base'
import {Toolbar} from '../../Toolbar/toolbar'
//Redux
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        navigationState: state.routesStack
    }
}
class RoutesNavigation extends React.Component {
    render(){
        const { dispatch, navigationState} = this.props
        return (
            <View style={{flex:1}}>
                {/*<Toolbar title="Categories"/>*/}
                <NavigatorRoutes
                    navigation={addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(RoutesNavigation)
