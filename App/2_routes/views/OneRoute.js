'use strict'
import React from 'react'
import {Picker} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'
class OneRoute extends React.Component {
    static navigationOptions = {
        headerMode:'float',
        title:'Route'
    };
    render(){
        return(
            <Container>
                <Content>
                    <Text>This is route</Text>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
    }
};
export default connect(mapStateToProps)(OneRoute)