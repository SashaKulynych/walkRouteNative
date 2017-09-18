'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorFavorites } from './1_favorites/navigationConfiguration'
import { NavigatorRoutes } from './2_routes/navigationConfiguration'
import { NavigatorTabs } from './2_routes/views/tabs/navigationConfiguration'
import { NavigatorCategories } from './3_categories/navigationConfiguration'
import {DrawerBar} from './0_drawerBar/navigationConfiguration'
import {TabBar} from './authAndReg/Navigation'
import {NavigatorMain} from './navigationConfiguration'
import {data,userData} from './AllData'
// Middleware
const middleware = () => {
  return applyMiddleware(logger)
};

const store = createStore(
  combineReducers({
      userData:userData,
      allData:data,
      mainStack: (state, action) => {
          if (action.type === 'JUMP_TO_TAB')return { ...state, index:1 }
          else return NavigatorMain.router.getStateForAction(action,state)
      },
      tabBar: (state, action) => TabBar.router.getStateForAction(action,state),
      drawerBar: (state, action) => {
          let nextState=DrawerBar.router.getStateForAction(action,state);
          if(nextState==null) nextState=state;
          switch(action.type){
              case 'DRAW_CLOSE':return {...state,index:0}; break;
              case 'DRAW_OPEN':return {...state,index:1};break;
              default: return nextState; break;
          }
      },
      favorites: (state, action) => NavigatorFavorites.router.getStateForAction(action, state),
      routesStack: (state, action) => NavigatorRoutes.router.getStateForAction(action,state),
      routesTabs:(state, action) => NavigatorTabs.router.getStateForAction(action,state),
      categories: (state, action) => NavigatorCategories.router.getStateForAction(action,state),
  }),
  middleware(),
)
export default store;