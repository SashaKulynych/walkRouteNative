'use strict'
import React from 'react'
import {Picker,TouchableOpacity,View} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text,Icon,CheckBox,Body,List,ListItem } from 'native-base';
import {checkData} from '../../AllData'
import {SkypeIndicator} from'react-native-indicators';
import { Easing } from 'react-native'
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux'
class OneRoute extends React.Component {
    constructor(){
        super();
        this.state={
            checked:false,
            comment:'',
            starCount: 2.5,
            isLoaded:false,
        }
    }
    static navigationOptions = {
        title:"Route"
    };
    componentDidMount(){
        this.checkFavorite()
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    changeValue(){
        const {state} = this.props.navigation;
        let value = this.props.allData.favorites.filter((favorite) => {
            return (favorite.userId == this.props.userData.id && favorite.routeId == state.params.data.id)
        })
        if (value.length == 0){
            fetch('http://localhost:3000/favorites', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "rating":this.state.starCount,
                    "userId":this.props.userData.id,
                    "routeId":state.params.data.id
                })
            }).then(()=>{
                checkData()
                this.setState({checked:true})
            });
        }
        else{
            let url = 'http://localhost:3000/favorites/'+this.props.allData.favorites.filter((value)=>{
                    return value.userId == this.props.userData.id && value.routeId==state.params.data.id})[0].id
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }}).then(()=> {
                checkData()
                this.setState({checked:false})
            })
        }

    }
    checkFavorite() {
        const {state} = this.props.navigation;
        let value = this.props.allData.favorites.filter((favorite) => {
            return (favorite.userId == this.props.userData.id && favorite.routeId == state.params.data.id)
        })
        console.log(value)
        if (value.length != 0) this.setState({
            checked:true
        })
        this.setState({isLoaded:true})
    }
    addComment(){
        const {state} = this.props.navigation;
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "description":this.state.comment,
                "rating":this.state.starCount,
                "userId":this.props.userData.id,
                "routeId":state.params.data.id
            })
        }).then(()=>{
            checkData();
            alert("Comment Add!")
        });
    }
    render(){
        const {state} = this.props.navigation;
        return(
            this.state.isLoaded ?(
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Name: {state.params.data.name}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Length: {state.params.data.length}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Category: {this.props.allData.categories.filter((value)=>{
                                return value.id == state.params.data.categoryId})[0].name}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>User: {this.props.allData.users.filter((value)=>{
                                return value.id == state.params.data.userId})[0].email}</Text>
                        </ListItem>
                        <ListItem onPress={()=>this.changeValue()}>
                            <CheckBox checked={this.state.checked} />
                            <Body>
                                <Text style={{marginLeft:15}}>Favorite</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <View style={{margin:10}}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    <Input style={{marginTop:15,marginRight:15,marginLeft:15}} onChangeText={(text)=>this.setState({comment: text})}
                           placeholder="Comment" />
                    <Button style={{margin:15}} block onPress={()=>this.addComment()}>
                        <Text>Add comment</Text>
                    </Button>
                    <Button style={{margin:15}} block onPress={()=>{
                        this.props.navigation.navigate('Comments',{routeId:state.params.data.id})
                    }}>
                        <Text>Comments</Text>
                    </Button>
                    </View>
                </Content>
            </Container>):(<SkypeIndicator color='#4883da' />)
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.allData,
        userData: state.userData
    }
};
export default connect(mapStateToProps)(OneRoute)