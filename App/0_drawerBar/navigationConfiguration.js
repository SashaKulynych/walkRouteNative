'use strict'
import React from 'react'
import { DrawerNavigator } from 'react-navigation'
// Tab-Navigators
// import FavoritesNavigation from '../1_favorites/views/FavoritesNavigation'
import {NavigatorFavorites} from '../1_favorites/navigationConfiguration'
import {NavigatorRoutes} from '../2_routes/navigationConfiguration'
import CategoriesNavigation from '../3_categories/views/CategoriesNavigation'
import SearchNavigation from '../4_searchRoute/SearchNavigation'

import {Icon} from 'native-base'

const routeConfiguration = {
    FavoritesNavigation: { screen: NavigatorFavorites,
        navigationOptions:()=>({
            drawerLabel:'Favorites',
            drawerIcon: <Icon name="md-star"/>
        })},
    RoutesNavigation: { screen: NavigatorRoutes ,
        navigationOptions:()=>({
            drawerLabel: 'Routes',
            drawerIcon: <Icon name="md-walk"/>
        })},
    CategoriesNavigation: { screen: CategoriesNavigation },
    Search:{screen:SearchNavigation}
}
export const DrawerBar = DrawerNavigator(routeConfiguration)
