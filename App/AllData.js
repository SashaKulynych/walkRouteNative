import React from 'react'
import store from './store'
import {View,Text} from 'react-native'
export const data = (state = [], action) => {
    switch (action.type) {
        case "DATA": {
            return action.payload;
        }
        default:
            return state;
    }
}
export const userData = (state = [], action) => {
    switch (action.type) {
        case "USER_DATA": {
            return action.payload;
        }
        default:
            return state;
    }
};
export function checkData(){
    return fetch('http://localhost:3000/db').then((response)=>response.json())
        .then((responseJson)=>{store.dispatch({type: 'DATA',payload:responseJson}); return true; });
}
export function checkDataExist(type,allData,userData) {
    if (allData[type].filter((value)=>{
        return value.userId == userData.id}).length==0)
    {
       return(
           <View style={{flex:1, flexDirection: 'column',alignItems:"center"}}>
               <Text style={{color:"grey",fontSize:18}}>You have not your {type}</Text>
           </View>
       )
    }
    else return null
}