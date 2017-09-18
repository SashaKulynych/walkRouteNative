'use strict'
import { DrawerNavigator } from 'react-navigation'
// Tab-Navigators
import FavoritesNavigation from '../1_favorites/views/FavoritesNavigation'
import NavigatorRoutes from '../2_routes/views/RoutesNavigation'
import CategoriesNavigation from '../3_categories/views/CategoriesNavigation'

const routeConfiguration = {
    FavoritesNavigation: { screen: FavoritesNavigation },
    RoutesNavigation: { screen: NavigatorRoutes },
    CategoriesNavigation: { screen: CategoriesNavigation },
}

export const DrawerBar = DrawerNavigator(routeConfiguration)
