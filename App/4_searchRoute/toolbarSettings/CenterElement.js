import React from 'react';
import {StyleSheet,Animated,Text,TextInput,View,Easing,Platform} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 22,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    }
});

export default class CenterElement extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            textInput: props.isSearchActive,
            opacityValue: new Animated.Value(1),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.isSearchActive !== nextProps.isSearchActive) {
            this.animateElements(nextProps.isSearchActive);
        }
    }
    animateElements = (nextIsSearchActive) => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({
                textInput: nextIsSearchActive,
            });

            Animated.timing(this.state.opacityValue, {
                toValue: 1,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    };
    render() {
        const { title, onSearchTextChange, searchValue, isSearchActive } = this.props;
        const { opacityValue, textInput } = this.state;

        const color = isSearchActive ? 'grey' : 'white';

        let content = <Text style={[styles.text, { color }]}>{title}</Text>;

        if (textInput) {
            content = ( <TextInput style={{fontSize:20}} underlineColorAndroid={'transparent'} placeholder="Search"
                                   value={this.props.searchValue}
                                   autoFocus={true}
                                   onChangeText={(searchValue)=>this.props.onSearchTextChange(searchValue)}
            /> );
        }

        return (
            <Animated.View style={[styles.container, { opacity: opacityValue }]}>
                {content}
            </Animated.View>
        );
    }
}