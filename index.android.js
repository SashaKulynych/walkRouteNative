'use strict'
// React
import React from 'react'
import { AppRegistry,AsyncStorage } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './App/store'
// Navigation
import {NavigatorMain} from './App/navigationConfiguration'
import {checkData} from './App/AllData'

class SampleNavigation extends React.Component {
    async componentDidMount(){
        const value = await AsyncStorage.getItem('USER_SUCCESS');
        if (value !== null) {
            let data = JSON.parse(value);
            store.dispatch({type: 'USER_DATA', payload:data[0] })
        }
        checkData();
    }
    render(){
        return(
            <Provider store={store}>
                <NavigatorMain/>
            </Provider>
        )
    }
}
AppRegistry.registerComponent('App', () => SampleNavigation)
