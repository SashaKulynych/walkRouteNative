'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { SearchNavigator } from './navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import {Icon} from 'native-base'

const mapStateToProps = (state) => {
    return {
        navigationState: state.search
    }
}
class SearchNavigation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Search',
        drawerIcon: <Icon name="md-search"/>
    }
    render(){
        const { dispatch, navigationState} = this.props;
        return (
            <SearchNavigator
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(SearchNavigation)
