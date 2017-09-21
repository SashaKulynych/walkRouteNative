'use strict'
// React
import React from 'react'
// Navigation
import {View} from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorCategories } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import {Toolbar} from '../../Toolbar/toolbar'
import {Icon} from "native-base"

const mapStateToProps = (state) => {
 return {
  navigationState: state.categories
  }
}
class CategoriesNavigation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Categories',
        drawerIcon: <Icon name="md-list"/>
    }
    render(){
        const { dispatch, navigationState} = this.props;
    return (
        <View style={{flex:1}}>
            <Toolbar title="Categories" type="draw"/>
          <NavigatorCategories
            navigation={
              addNavigationHelpers({
                dispatch: dispatch,
                state: navigationState
              })
            }
          />
        </View>
        )
      }
}

export default connect(mapStateToProps)(CategoriesNavigation)
