'use strict'
import React from 'react'
import { FlatList,RefreshControl,View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List,Icon } from 'native-base';
import {checkData} from '../../AllData'
import {Toolbar} from '../../Toolbar/toolbar'
import { connect } from 'react-redux'
import store from '../../store'
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
                {/*<Toolbar title="Favorite" type="draw"/>*/}
                <Content
                     refreshControl={
                         <RefreshControl
                             refreshing={this.state.refreshing}
                             onRefresh={()=>this.getData()}
                         />
                     }
                >
                    <FlatList
                        data={this.props.allData.favorites}
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