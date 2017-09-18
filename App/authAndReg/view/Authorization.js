import React, { Component } from 'react';
import {AppRegistry,AsyncStorage} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import { NavigationActions } from 'react-navigation'
class Authorization extends Component {
    static navigationOptions = {
        title:'Authorization'
    }
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        };
    }

    login(){
        let url= 'http://localhost:3000/users?email='+this.state.email+'&password='+this.state.password;
        fetch(url).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson!="") {
                    AsyncStorage.setItem('USER_SUCCESS',JSON.stringify(responseJson));
                    this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:1} })
                }
                else alert("E-mail or password incorrect!")
            });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input keyboardType="email-address" placeholder="E-mail"
                                   onChangeText={(text)=> this.setState({email: text})} />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" onChangeText={(text)=>this.setState({password: text})}/>
                        </Item>
                    </Form>
                    <Container>
                        <Button block onPress={() => this.login()}>
                            <Text>Login</Text>
                        </Button>
                    </Container>
                </Content>
            </Container>
        );
    }
}
export default Authorization;