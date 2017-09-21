'use strict'
import React from 'react'
import { StackNavigator  } from 'react-navigation'
import RoutesTabsNavigation from './views/tabs/RoutesTabsNavigation'
// Screens
import OneRoute from './views/OneRoute'
import Comments from './views/Comments'
import {Icon} from 'native-base'
const StackConfig ={
    TabNavigation: {
        screen:RoutesTabsNavigation,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="md-menu" style={{marginLeft:10}} onPress={()=>navigation.navigate('DrawerOpen')} />,
        })
    },
    AllOneRoute:{
        screen:OneRoute
    },
    Comments:{
        screen:Comments
    }
}

export const NavigatorRoutes = StackNavigator(StackConfig,{initialRouteName:"TabNavigation"});