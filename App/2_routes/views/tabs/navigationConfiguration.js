import AllRoutesScreen from './AllRoutesScreen'
import MyRoutesScreen from './MyRoutesScreen'
import AddRouteScreen from './AddRouteScreen'
import { TabNavigator  } from 'react-navigation'

const routeConfiguration = {
    AllRoutesScreen: { screen: AllRoutesScreen },
    MyRoutesScreen: { screen: MyRoutesScreen },
    AddRouteScreen: { screen: AddRouteScreen },
};
export const NavigatorTabs = TabNavigator(routeConfiguration);