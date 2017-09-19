'use strict';
import React from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'
class AddCategoryScreen extends React.Component {
    static navigationOptions = {
        title:'Add category'
    };
    constructor(props){
        super(props);
        this.state={
            categoryName:''
        }
    }

    addCategory(){
        let http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/categories?name='+this.state.categoryName+'&userId='+this.props.userData.id);
        http.setRequestHeader("Content-Type", "application/json");
        http.responseType = 'json';
        http.onload = ()=> {
            if (http.readyState==4 && http.status == 200) {
                if (http.response == "") {
                    fetch('http://localhost:3000/categories', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "name": this.state.categoryName,
                            "userId":this.props.userData.id
                        })
                    });
                    alert("Category add");
                }
                else alert("Category exist!")
            }
        };
        http.send(null);
        checkData();
    }
  render(){
    return(
        <Container>
            <Content>
                <Form>
                    <Item>
                        <Input onChangeText={(text)=>this.setState({categoryName: text})}
                               placeholder="Category name" />
                    </Item>
                    <Button block onPress={() => this.addCategory()}>
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
        userData: state.userData
    }
};
export default connect(mapStateToProps)(AddCategoryScreen)