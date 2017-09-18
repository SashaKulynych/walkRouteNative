'use strict'

import React from 'react'
import {TabNavigator} from 'react-navigation';
import Authorization from './view/Authorization';
import Registration from './view/Registration'

const routeConfiguration = {
    Authorization: { screen: Authorization },
    Registration: { screen: Registration },
}
// going to disable the header for now

export const TabBar = TabNavigator(routeConfiguration)
