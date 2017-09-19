'use strict'
import React from 'react'
import {Picker,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text,Icon } from 'native-base';
import {checkData} from '../../AllData'
import { connect } from 'react-redux'
class OneRoute extends React.Component {
    render(){
        const {state} = this.props.navigation;
        return(
            <Container>
                <Content>
                    <Text>{state.params.data.name}</Text>
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.goBack() }
                        style={{
                            padding:5,
                            borderRadius:20,
                            backgroundColor:'purple',
                            margin:20
                        }}>
                        <Text>{'Go back'}</Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
        routesStack: state.routesStack
    }
};
export default connect(mapStateToProps)(OneRoute)