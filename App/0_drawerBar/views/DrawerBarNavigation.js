'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { DrawerBar } from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
    navigationState: state.drawerBar,
  }
}

class DrawerBarNavigation extends React.Component {
    static navigationOptions = {
        title: 'DrawerBarNavigation',
    }
  render(){
    const { dispatch, navigationState } = this.props
    return (
      <DrawerBar
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

export default connect(mapStateToProps)(DrawerBarNavigation)
