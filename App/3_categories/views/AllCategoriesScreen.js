'use strict'
import React from 'react'
import {AppRegistry,View,FlatList,AsyncStorage,RefreshControl} from 'react-native';
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
                        <ListItem>
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