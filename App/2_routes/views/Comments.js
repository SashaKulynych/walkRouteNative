'use strict'
import React from 'react'
import { FlatList,RefreshControl } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'
class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state={
            refreshing: false,
            comments:[]
        }
    }
    static navigationOptions = {
        title:'Comments'
    };
    getData(){
        this.setState({refreshing: true});
        checkData();
        this.setState({refreshing: false});
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        const {state} = this.props.navigation;
        return(
            <Content style={{flex:1}}
                     refreshControl={
                         <RefreshControl
                             refreshing={this.state.refreshing}
                             onRefresh={()=>this.getData()}
                         />
                     }
            >
                {this.props.allData.comments.filter((value)=>{
                    return value.routeId == state.params.routeId
                }).length==0?<Text style={{textAlign:'center',margin:15,fontSize:14,color:'grey'}}>Comments not found</Text>:null}
                <FlatList
                    data={this.props.allData.comments.filter((value)=>{
                        return value.routeId == state.params.routeId
                    })}
                    keyExtractor={(x,i)=>i}
                    renderItem={({ item }) => (
                        <List>
                            <ListItem>
                                <Text>User: {
                                    this.props.allData.users.filter((value)=>{
                                        return value.id == item.userId})[0].email
                                }</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Description: {item.description}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Rating: {item.rating}</Text>
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
        allData: state.allData
    }
};
export default connect(mapStateToProps)(Comments)