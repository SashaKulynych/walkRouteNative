'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabs } from './navigationConfiguration'
import { View } from 'react-native'
import {checkData} from '../../../AllData'
//Redux
import { connect } from 'react-redux'
import {SkypeIndicator} from'react-native-indicators';

const mapStateToProps = (state) => {
 return {
    navigationState: state.routesTabs
  }
}
class RoutesTabsNavigation extends React.Component {
    static navigationOptions = {
        title:'Routes',
    };
    constructor(){
        super()
        this.state={
            isLoaded:false
        }
    }
    getData(){
        this.setState({refreshing: true});
        checkData();
        this.setState({refreshing: false, isLoaded:true});
    }
    componentDidMount(){
        this.getData();
    }
render(){
    const { dispatch, navigationState} = this.props
return (
    this.state.isLoaded ?(
      <NavigatorTabs
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />):(<SkypeIndicator color='#4883da' />)
    )
  }
}

export default connect(mapStateToProps)(RoutesTabsNavigation)
