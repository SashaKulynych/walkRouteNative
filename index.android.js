'use strict'
import React from 'react'

import { AppRegistry,AsyncStorage,View,Text } from 'react-native'
import {SkypeIndicator} from'react-native-indicators';

import { Provider } from 'react-redux'
import store from './App/store'

import DrawerBarNavigation from './App/0_drawerBar/views/DrawerBarNavigation'
import Authorization from './App/authAndReg/view/Authorization'
import Registration from './App/authAndReg/view/Registration'

import {checkData} from "./App/AllData"

class WalkingRoutes extends React.Component {
    constructor(){
        super();
        this.state={
            isLoaded:false,
            routeStatus:'LogInFail'
        }
        this.handleRoute = this.handleRoute.bind(this)
    }
    async componentDidMount(){
        const value = await AsyncStorage.getItem('USER_SUCCESS');
        if (value !== null) {
            let data = JSON.parse(value);
            store.dispatch({type: 'USER_DATA', payload:data[0] });
        }
        checkData().then(() => {
            if(value !== null) this.setState({isLoaded: true, routeStatus:"LogInSuccess"})
            else this.setState({ isLoaded: true,routeStatus:"LogInFail" });
        })
    }
    handleRoute(value){
        if(value) this.setState({routeStatus:value})
    }
    mainRoute(value){
        switch(value) {
            case "LogInFail": return <Authorization handleRoute={this.handleRoute}/>
                break;
            case "LogInSuccess": return <DrawerBarNavigation/>
                break;
            case "Registration": return <Registration handleRoute={this.handleRoute}/>
                break;
        }
    }
    render(){
        return(
            this.state.isLoaded ?(
            <Provider store={store}>
                {this.mainRoute(this.state.routeStatus)}
            </Provider>):(<SkypeIndicator color='#4883da' />)
        );
    }
}
AppRegistry.registerComponent('App', () => WalkingRoutes)
