'use strict'
import React from 'react'
import { DrawerNavigator } from 'react-navigation'
// Tab-Navigators
// import FavoritesNavigation from '../1_favorites/views/FavoritesNavigation'
import {NavigatorFavorites} from '../1_favorites/navigationConfiguration'
import {NavigatorRoutes} from '../2_routes/navigationConfiguration'
import {CategoryNav} from '../3_categories/navigationConfiguration'
import {SearchNavigator} from '../4_searchRoute/navigationConfiguration'

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
    CategoriesNavigation: { screen: CategoryNav,
        navigationOptions:()=>({
            drawerLabel: 'Categories',
            drawerIcon: <Icon name="md-list"/>
        })},
    Search:{screen:SearchNavigator,
        navigationOptions:()=>({
            drawerLabel: 'Search',
            drawerIcon: <Icon name="ios-search"/>
        })}
}
export const DrawerBar = DrawerNavigator(routeConfiguration)
