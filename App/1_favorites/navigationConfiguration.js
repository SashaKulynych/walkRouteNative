'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import FavoritesScreen from './views/FavoritesScreen'

const routeConfiguration = {
    FavoritesScreen: { screen: FavoritesScreen }
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'FavoritesScreen'
}

export const NavigatorFavorites = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
