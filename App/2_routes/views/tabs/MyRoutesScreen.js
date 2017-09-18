'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class MyRoutesScreen extends React.Component {
    static navigationOptions = {
        title:'My Routes'
    }
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'brown',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Three Screen Three' }</Text>
        <TouchableOpacity
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
