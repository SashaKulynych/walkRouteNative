'use strict'
import React from 'react'
import { StackNavigator  } from 'react-navigation'

// Screens
import DrawerBarNavigation from './0_drawerBar/views/DrawerBarNavigation'
import AuthAndRegNavigation from './authAndReg/view/AuthAndRegNavigation'
const routeConfiguration = {
    AuthAndRegNavigation: { screen: AuthAndRegNavigation },
    DrawerBarNavigation: { screen: DrawerBarNavigation },
};
export const NavigatorMain = StackNavigator(
    routeConfiguration,
    {
        headerMode:'none',
        initialRouteName:"DrawerBarNavigation"
    }
);