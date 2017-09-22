'use strict'
import React from 'react'
import { FlatList,RefreshControl,View,StatusBar } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List,Icon } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'

class FavoritesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            refreshing: false,
        }
    }
    static navigationOptions = {
        title:'Favorites',
    };
    getData(){
        this.setState({refreshing: true});
        checkData();
        this.setState({refreshing: false});
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                    <Content style={{flex:1}}
                         refreshControl={
                             <RefreshControl
                                 refreshing={this.state.refreshing}
                                 onRefresh={()=>this.getData()}
                             />
                         }
                    >
                        <FlatList
                            data={this.props.allData.favorites.filter((value)=>{
                                return value.userId == this.props.userData.id})}
                            keyExtractor={(x,i)=>i}
                            renderItem={({ item }) => (
                                <List>
                                    <ListItem
                                        delayLongPress={1000}
                                        onPress={() => this.props.navigation.navigate('OneFavoriteRoute',{data:this.props.allData.routes.filter((value)=>{
                                            return value.id == item.routeId})[0]})
                                        }
                                    >
                                        <Text>Name: {this.props.allData.routes.filter((value)=>{
                                            return value.id == item.routeId})[0].name}</Text>
                                    </ListItem>
                                </List>
                            )}
                        />
                    </Content>
                {this.props.allData.favorites.filter((value)=>{
                    return value.userId == this.props.userData.id}).length==0?
                    <View style={{flex:1, flexDirection: 'column',alignItems:"center"}}>
                        <Text style={{color:"grey",fontSize:18}}>You have not favorite routes</Text>
                    </View>:null}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
        userData: state.userData
    }
}
export default connect(mapStateToProps)(FavoritesScreen)