'use strict'

import { TabNavigator,StackNavigator } from 'react-navigation'

import MyCategoriesScreen from './views/MyCategoriesScreen'
import AddCategoryScreen from './views/AddCategoryScreen'

const routeConfiguration = {
    MyCategoriesScreen: { screen: MyCategoriesScreen },
    AddCategoryScreen: { screen: AddCategoryScreen }
}
// going to disable the header for now

const NavigatorCategories = TabNavigator(routeConfiguration)
export const CategoryNav = StackNavigator(
    {
        Categories: {screen:NavigatorCategories,
            navigationOptions: ({navigation}) => ({
                header:null
            })}
    }
)
