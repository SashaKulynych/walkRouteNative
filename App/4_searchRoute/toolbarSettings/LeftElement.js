import React from 'react'
import {Animated,Easing,Platform} from 'react-native'
import {Icon,View} from 'native-base'
import store from '../../store'
export default class LeftElement extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            leftElement: 'md-menu',
            spinValue: new Animated.Value(0),
        };
    }
    componentWillReceiveProps(nextProps) {
        // goes to search state
        if (nextProps.isSearchActive && !this.props.isSearchActive) {
            this.animate({ toValue: 1, leftElement: 'arrow-forward' });
        }
        // goes to default look
        if (!nextProps.isSearchActive && this.props.isSearchActive) {
            this.animate({ toValue: 0, leftElement: 'md-menu' });
        }
    }
    animate = ({ toValue, leftElement }) => {
        Animated.timing(this.state.spinValue, {
            toValue: 0.5,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({ leftElement });

            Animated.timing(this.state.spinValue, {
                toValue,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    }
    changeColor(){
     if(this.props.isSearchActive) return {color:'grey'}
     else return {color:'white'}
    }
    openDraw(){
        store.dispatch({type: 'DRAW_OPEN'})
    }
    render() {
        const { leftElement, spinValue } = this.state;
        const { isSearchActive, onSearchClose } = this.props;

        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });
        return (
            <Animated.View style={[{ transform: [{ rotate: spin }] }]} >
                <Icon
                    name={leftElement}
                    style={this.changeColor()}
                    onPress={leftElement == 'md-menu'?this.openDraw:onSearchClose}
                />
            </Animated.View>
        );
    }
}