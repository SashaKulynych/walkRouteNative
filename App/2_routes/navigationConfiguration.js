'use strict'
import { StackNavigator  } from 'react-navigation'
import RoutesTabsNavigation from './views/tabs/RoutesTabsNavigation'
// Screens
import OneRoute from './views/OneRoute'

const StackConfig ={
    TabNavigation: {
        screen:RoutesTabsNavigation
    },
    OneRoute:{screen:OneRoute},
}

export const NavigatorRoutes = StackNavigator(StackConfig,{initialRouteName:"TabNavigation"});