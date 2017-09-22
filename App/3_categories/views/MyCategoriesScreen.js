'use strict'
import React from 'react'
import {AppRegistry,View,FlatList,AsyncStorage,RefreshControl,Alert,TouchableWithoutFeedback,ScrollView  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List,Button } from 'native-base';
import {checkData,checkDataExist} from '../../AllData'
import { connect } from 'react-redux'
class MyCategoriesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            refreshing: false,
        }
    }
    static navigationOptions = {
        title:'My categories'
    };
    getData(){
        this.setState({refreshing: true});
        checkData();
        this.setState({refreshing: false});
    }
    componentDidMount(){
        this.getData();
    }
    deleteCategory(id){
        let url = 'http://localhost:3000/categories/'+id;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }}).then(this.getData())

    }
    render(){
        return(
            <View style={{flex:1}}>
            <Content  style={{flex:1}}
                     refreshControl={
                         <RefreshControl
                             refreshing={this.state.refreshing}
                             onRefresh={()=>this.getData()}
                         />
                     }
            >
                <FlatList
                    data={this.props.allData.categories.filter((value)=>{
                        return value.userId == this.props.userData.id})}
                    keyExtractor={(x,i)=>i}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                            delayLongPress={1000}
                            onLongPress ={()=>{
                                Alert.alert(
                                    'Delete category '+item.name +"?",
                                    'You delete all routes in this category!',
                                    [
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                        {text: 'OK', onPress: () => {this.deleteCategory(item.id)}},
                                    ],
                                    { cancelable: false }
                                )
                            }}>
                                <ListItem>
                                    <Text>{item.name}</Text>
                                </ListItem>
                        </TouchableWithoutFeedback>
                    )}
                />
            </Content>
                {checkDataExist("categories",this.props.allData,this.props.userData)}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
        userData: state.userData
    }
};
export default connect(mapStateToProps)(MyCategoriesScreen)