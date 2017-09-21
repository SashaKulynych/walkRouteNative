import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {Icon} from 'native-base'
import store from '../store'
import { NavigationActions } from 'react-navigation';
export const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        backgroundColor: '#3695ff',
        elevation: 4,
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        height: 24,
        flex: 1,
    },
    text: {
        marginLeft:20,
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    }
});
export class Toolbar extends React.Component {
    buttonType(type){
        if(type=="draw") return this.props.navigate('DrawerOpen')
        if(type=="route") return store.dispatch({type: 'FAVORITE_BACK'});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbarContainer}>
                    <Icon
                        name={this.props.type=="draw"?"md-menu":"md-arrow-back"}
                        style={{color:"white"}}
                        onPress={()=>this.buttonType(this.props.type)}
                    />
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}