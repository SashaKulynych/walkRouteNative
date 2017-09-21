'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Search from './Search'
import OneRoute from '../2_routes/views/OneRoute'
const routeConfiguration = {
    Search: {
        screen: Search,
        navigationOptions:({navigation})=>({
            header :null
        })
    },
    SearchOneRoute:{screen:OneRoute,
        navigationOptions:({navigation})=>({
            header :null
        })},
}

export const SearchNavigator = StackNavigator(routeConfiguration)
