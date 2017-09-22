import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base'
import store from '../../store'
class Registration extends Component {
    static navigationOptions = {
        title:'Registration'
    }
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            uniqueEmail:""
        };
    }
    AddUser(){
        let r = /^\w+@\w+\.\w{2,4}$/i;
        if (!r.test(this.state.email)) {
            return (
                alert("Not correct e-mail!")
            )
        }
        let http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/users?email='+this.state.email);
        http.setRequestHeader("Content-Type", "application/json");
        http.responseType = 'json';
        http.onload = ()=> {
            if (http.readyState==4 && http.status == 200) {
                if (http.response == "") {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "email": this.state.email,
                            "password": this.state.password
                        })
                    }).then(
                        fetch('http://localhost:3000/users?email='+this.state.email).then((response) => response.json())
                            .then((responseJson) => {
                                    AsyncStorage.setItem('USER_SUCCESS', JSON.stringify(responseJson));
                                    store.dispatch({type: 'USER_DATA', payload: responseJson[0]})
                                    this.props.handleRoute("LogInSuccess");
                            })
                    );
                }
                else alert("E-mail exist!")
            }
        };
        http.send(null);
    }
    render() {
        return (
            <Container
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Form>
                    <Item>
                        <Input keyboardType="email-address" placeholder="E-mail"
                               onChangeText={(text)=> this.setState({email: text})} placeHolder/>
                    </Item>
                    <Item last>
                        <Input placeholder="Password"
                               onChangeText={(text)=>this.setState({password: text})}/>
                    </Item>
                </Form>
                <Button style={{margin:15}}  block onPress={() => this.AddUser()}>
                    <Text>Registration</Text>
                </Button>
                <Button style={{margin:15}}  block onPress={() =>  this.props.handleRoute("LogInFail")}>
                    <Text>Back to Authorization</Text>
                </Button>
            </Container>
        );
    }
}
export default Registration;