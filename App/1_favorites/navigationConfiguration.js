'use strict'
import React from 'react'
import { StackNavigator } from 'react-navigation'

// Screens
import FavoritesScreen from './views/FavoritesScreen'
import OneRoute from '../2_routes/views/OneRoute'
import {Icon} from 'native-base'

const routeConfiguration = {
    FavoritesScreen: {screen: FavoritesScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="md-menu" style={{marginLeft:10}} onPress={()=>navigation.navigate('DrawerOpen')} />,
        })
    },
    OneFavoriteRoute:{screen:OneRoute}
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'FavoritesScreen',
}

export const NavigatorFavorites = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
