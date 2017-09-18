'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabs } from './navigationConfiguration'
import { View } from 'react-native'
import Toolbar from './Toolbar'

//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
    navigationState: state.routesTabs
  }
}
class RoutesTabsNavigation extends React.Component {

render(){
    const { dispatch, navigationState} = this.props
return (
    <View style={{ flex:1 }}>
        <Toolbar />
        <View style={{flex:1 ,marginTop:56}}>
          <NavigatorTabs
            navigation={addNavigationHelpers({
              dispatch: dispatch,
              state: navigationState
            })}
          />
        </View>
    </View>
    )
  }
}

export default connect(mapStateToProps)(RoutesTabsNavigation)
