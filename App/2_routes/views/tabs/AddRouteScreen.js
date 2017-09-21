'use strict'
import React from 'react'
import {Picker} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import {checkData} from '../../../AllData'
import { connect } from 'react-redux'
class AddRouteScreen extends React.Component {
    static navigationOptions = {
        title:'Add Route'
    };
    constructor(props){
        super(props);
        this.state={
            routeName:'',
            routeLength:0,
            routeCategory:'',
            routeDescription:'',
            categoryPicker:[]
        }
    }
    addRoute(){
        if(this.state.routeCategory!=""){
            fetch('http://localhost:3000/routes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": this.state.routeName,
                    "description":this.state.routeDescription,
                    "length":this.state.routeLength,
                    "categoryId":this.state.routeCategory,
                    "userId": this.props.userData.id
                })
            });
            checkData();
        }
        else alert("Select Category!")
    }
    categoryPicker(){
        let pickerItems=[];
        let myCategories=this.props.allData.categories.filter((value)=>{
            return value.userId == this.props.userData.id})
        for(let category in myCategories){
            let data = myCategories[category];
            pickerItems.push(<Picker.Item label={data.name} value={data.id} key={data.id} />)
        }
        return pickerItems
    }
  render(){
    return(
        <Container>
            <Content>
                <Picker
                    selectedValue={this.state.routeCategory}
                    onValueChange={(itemValue, itemIndex) => this.setState({routeCategory: itemValue})}>
                    <Picker.Item label="Category" value="" />
                    {this.categoryPicker()}
                </Picker>
                <Form>
                    <Item>
                        <Input keyboardType="numeric"
                            onChangeText={(text)=>this.setState({routeLength: text})}
                               placeholder="Length" />
                    </Item>
                    <Item>
                        <Input onChangeText={(text)=>this.setState({routeName: text})}
                               placeholder="Route name" />
                    </Item>
                    <Item>
                        <Input onChangeText={(text)=>this.setState({routeDescription: text})}
                               placeholder="Description" />
                    </Item>
                    <Button block onPress={() => this.addRoute()}>
                        <Text>Add</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
        userData: state.userData
    }
};
export default connect(mapStateToProps)(AddRouteScreen)