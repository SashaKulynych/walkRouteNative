'use strict'
import React from 'react'
import { FlatList,RefreshControl,View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,CheckBox,ListItem, List } from 'native-base';
import {checkData,checkDataExist} from '../../../AllData'
import { connect } from 'react-redux'
class MyRoutesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            refreshing: false,
        }
        this.getData = this.getData.bind(this);
    }
    static navigationOptions = {
        title:'My Routes'
    };
    getData(){
        this.setState({refreshing: true});
        checkData();
        this.setState({refreshing: false});
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Content style={{flex:1}}
                         refreshControl={
                             <RefreshControl
                                 refreshing={this.state.refreshing}
                                 onRefresh={this.getData}
                             />
                         }
                >
                    <FlatList
                        data={this.props.allData.routes.filter((value)=>{
                            return value.userId == this.props.userData.id})}
                        keyExtractor={(x,i)=>i}
                        renderItem={({ item }) => (
                            <List>
                                <ListItem
                                    delayLongPress={1000}
                                    onPress={() => this.props.navigation.navigate('AllOneRoute',{data:item})
                                    }
                                >
                                    <Text>{item.name}</Text>
                                </ListItem>
                            </List>
                        )}
                    />
                </Content>
                {checkDataExist("routes",this.props.allData,this.props.userData)}
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
export default connect(mapStateToProps)(MyRoutesScreen)