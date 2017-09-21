'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import {NavigationActions} from 'react-navigation'

// Navigation
import { NavigatorFavorites } from './1_favorites/navigationConfiguration'
import { NavigatorRoutes } from './2_routes/navigationConfiguration'
import { NavigatorTabs } from './2_routes/views/tabs/navigationConfiguration'
import { NavigatorCategories } from './3_categories/navigationConfiguration'
import { SearchNavigator } from './4_searchRoute/navigationConfiguration'
import {DrawerBar} from './0_drawerBar/navigationConfiguration'
import {data,userData} from './AllData'
// Middleware
const middleware = () => {
  return applyMiddleware(logger)
};
const firstAction = DrawerBar.router.getActionForPathAndParams('DrawerClose');
const tempNavState = DrawerBar.router.getStateForAction(firstAction);
const initialNavState = DrawerBar.router.getStateForAction(
    firstAction,
    tempNavState
);
function navigation(state=initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'DRAW_OPEN':
            nextState = DrawerBar.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DRAW_CLOSE' }),
                state
            );
            break;
        default:
            nextState = DrawerBar.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
const store = createStore(
  combineReducers({
      nav:navigation,
      userData:userData,
      allData:data,
      search:(state, action) => SearchNavigator.router.getStateForAction(action, state),
      favorites: (state=initialNavState, action) => {
          if (action.type === 'FAVORITE_BACK')
              return DrawerBar.router.getStateForAction(NavigationActions.navigate({ routeName: "RoutesNavigation" }), state)
          else return DrawerBar.router.getStateForAction(action, state)
      },
      routesStack: (state, action) =>NavigatorRoutes.router.getStateForAction(action,state),
      routesTabs:(state, action) => NavigatorTabs.router.getStateForAction(action,state),
      categories: (state, action) => NavigatorCategories.router.getStateForAction(action,state),
  }),
  middleware()
)
export default store;