'use strict'
import React from 'react'
import { StackNavigator  } from 'react-navigation'

// Screens
import DrawerBarNavigation from './0_drawerBar/views/DrawerBarNavigation'
import AuthAndRegNavigation from './authAndReg/view/AuthAndRegNavigation'
const routeConfiguration = {
    DrawerBarNavigation: { screen: DrawerBarNavigation },
    AuthAndRegNavigation: { screen: AuthAndRegNavigation },
};
export const NavigatorMain = StackNavigator(
    routeConfiguration,
    {
        headerMode:'none'
    }
);