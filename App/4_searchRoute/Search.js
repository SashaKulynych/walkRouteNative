'use strict'
// React
import React from 'react'
import {StyleSheet,View,Animated,FlatList,RefreshControl,StatusBar} from 'react-native'
import {Content,List,ListItem,Text,Header,Item,Icon,Input,Button} from 'native-base'
import { connect } from 'react-redux'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isSearchActive: false, searchValue: '',refreshing:false };
    }
    static navigationOptions = {
        title:'Search route',
    };
    searchRoute(){
        if(this.state.searchValue!=''){
            return this.props.store.allData.routes.filter((value)=>{
                const itemData = value.name.toUpperCase();
                const textData = this.state.searchValue.toUpperCase();
                return itemData.indexOf(textData)>-1;
            })
        }else return this.props.store.allData.routes

    }
    render(){
        return (
            <View style={{ flex:1 }}>
                <Header style={{backgroundColor:"grey"}} searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                               value={this.state.searchValue}
                               autoFocus={true}
                               onChangeText={(value)=>this.setState({searchValue:value})}/>
                    </Item>
                </Header>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                <View style={{flex:1}}>
                    <Content style={{flex:1}}
                             refreshControl={
                                 <RefreshControl
                                     refreshing={this.state.refreshing}
                                     onRefresh={()=>this.setState({searchValue:''})}
                                 />
                             }
                    >
                        <FlatList
                            data={this.searchRoute()}
                            keyExtractor={(x,i)=>i}
                            renderItem={({ item }) => (
                                    <ListItem
                                        onPress={() => this.props.navigation.navigate('SearchOneRoute',{data:item})
                                        }
                                    >
                                        <Text>{item.name}</Text>
                                    </ListItem>
                            )}
                        />
                    </Content>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        store: store
    }
}
export default connect(mapStateToProps)(Search)
