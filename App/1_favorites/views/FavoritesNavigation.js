'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorFavorites } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
    navigationState: state.favorites
  }
}

class FavoritesNavigation extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Favorites'
    }

  render(){
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorFavorites
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
export default connect(mapStateToProps)(FavoritesNavigation)
