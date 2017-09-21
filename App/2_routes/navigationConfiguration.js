'use strict'
import React from 'react'
import { StackNavigator  } from 'react-navigation'
import {NavigatorTabs} from './views/tabs/navigationConfiguration'
// Screens
import OneRoute from './views/OneRoute'
import Comments from './views/Comments'
import {Icon} from 'native-base'
const StackConfig ={
    TabNavigation: {
        screen:NavigatorTabs,
        navigationOptions: ({navigation}) => ({
            header:null
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