'use strict'
import React from 'react'
import {AppRegistry,View,FlatList,AsyncStorage,RefreshControl,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'
class AllCategoriesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            myFavoriteData:[],
            userData:[],
            refreshing: false,
        }
        this.getData = this.getData.bind(this);
    }
    static navigationOptions = {
        title:'All categories'
    };
    getData(){
        this.setState({refreshing: true});
        checkData()
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
            }}).then(this.getData()).then(alert("Category deleted!"))

    }
    render(){
    return(
        <Content style={{flex:1}}
                 refreshControl={
                     <RefreshControl
                         refreshing={this.state.refreshing}
                         onRefresh={this.getData}
                     />
                 }
        >
            <FlatList
                data={this.props.state.allData.categories}
                keyExtractor={(x,i)=>i}
                renderItem={({ item }) => (
                    <List>
                        <ListItem delayLongPress={1000}
                                  onLongPress ={()=>{
                                      Alert.alert(
                                          'Delete category '+item.name,
                                          '',
                                          [
                                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                              {text: 'OK', onPress: () => {this.deleteCategory(item.id)}},
                                          ],
                                          { cancelable: false }
                                      )
                                  }}>
                            <Text>{item.name}</Text>
                        </ListItem>
                    </List>
                )}
            />
        </Content>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
};
export default connect(mapStateToProps)(AllCategoriesScreen)