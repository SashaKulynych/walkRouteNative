'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../Navigation'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
}

class AuthAndRegNavigation extends React.Component {
    static navigationOptions = {
        title: 'AuthAndRegNavigation',
    }
    render(){
        const { dispatch, navigationState } = this.props
        return (
            <TabBar
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(AuthAndRegNavigation)
