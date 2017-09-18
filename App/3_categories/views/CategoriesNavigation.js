'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorCategories } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
  navigationState: state.categories
  }
}
class CategoriesNavigation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Categories'
    }
    render(){
        const { dispatch, navigationState} = this.props;
    return (
          <NavigatorCategories
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

export default connect(mapStateToProps)(CategoriesNavigation)
