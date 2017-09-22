'use strict'
import React from 'react'
import { StackNavigator } from 'react-navigation'

import Search from './Search'
import OneRoute from '../2_routes/views/OneRoute'
import {Icon} from 'native-base'

const routeConfiguration = {
    Search: {
        screen: Search,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="md-menu" style={{marginLeft:10}} onPress={()=>navigation.navigate('DrawerOpen')} />,
        })
    },
    SearchOneRoute:{screen:OneRoute},
}

export const SearchNavigator = StackNavigator(routeConfiguration)
