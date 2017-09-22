import React, { Component } from 'react';
import {AppRegistry,AsyncStorage,View} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import store from '../../store'
import { connect } from 'react-redux'

class Authorization extends Component {
    static navigationOptions = {
        title:'Authorization'
    };
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            isLoaded: false,
            auth:false
        };
    }
    login() {
        let url = 'http://localhost:3000/users?email=' + this.state.email + '&password=' + this.state.password;
        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson != "") {
                    AsyncStorage.setItem('USER_SUCCESS', JSON.stringify(responseJson));
                    store.dispatch({type: 'USER_DATA', payload: responseJson[0]})
                    // this.props.navigation.navigate('DrawerBarNavigation')
                    this.props.handleRoute("LogInSuccess");
                }
                else alert("E-mail or password incorrect!")
            });
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
                               onChangeText={(text)=> this.setState({email: text})} />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" onChangeText={(text)=>this.setState({password: text})}/>
                    </Item>
                </Form>
                <Button style={{margin:15}} block onPress={() => this.login()}>
                    <Text>Login</Text>
                </Button>
                <Button style={{margin:15}} block onPress={() =>this.props.handleRoute("Registration")}>
                    <Text>Registration</Text>
                </Button>
            </Container>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        userData: store.userData
    }
};
export default connect(mapStateToProps)(Authorization)