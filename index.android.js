'use strict'
// React
import React from 'react'
import { AppRegistry,AsyncStorage,View } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './App/store'
// Navigation
import MainStackNavigation from './App/MainStackNavigation'

class SampleNavigation extends React.Component {
    async componentWillMount(){
        const value = await AsyncStorage.getItem('USER_SUCCESS');
        if (value !== null) {
            let data = JSON.parse(value);
            store.dispatch({type: 'USER_DATA', payload:data[0] })
        }
    }
    render(){
        return(
            <Provider store={store}>
                <MainStackNavigation/>
            </Provider>
        )
    }
}
AppRegistry.registerComponent('App', () => SampleNavigation)
