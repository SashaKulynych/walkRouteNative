'use strict'

import { TabNavigator } from 'react-navigation'

// Screens
import AllCategoriesScreen from './views/AllCategoriesScreen'
import MyCategoriesScreen from './views/MyCategoriesScreen'
import AddCategoryScreen from './views/AddCategoryScreen'

const routeConfiguration = {
    AllCategoriesScreen: { screen: AllCategoriesScreen },
    MyCategoriesScreen: { screen: MyCategoriesScreen },
    AddCategoryScreen: { screen: AddCategoryScreen }
}
// going to disable the header for now

export const NavigatorCategories = TabNavigator(routeConfiguration)
