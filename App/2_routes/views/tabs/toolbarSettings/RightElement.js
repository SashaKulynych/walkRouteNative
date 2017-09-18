import React from 'react'
import {Icon} from 'native-base'
import {View} from 'react-native'

export default class RightElement extends React.Component {
    changeColor(){
        if(this.props.isSearchActive && this.props.searchValue.length > 0)
            return {color:'grey'}
            else return {color:'white'}
    }
    render() {
        const { onSearchPress, onSearchClear, isSearchActive, searchValue } = this.props;

        if (isSearchActive && searchValue.length === 0) {
            return null;
        }

        const iconProps = {};

        if (isSearchActive && searchValue.length > 0) {
            iconProps.name = 'md-close';
            iconProps.onPress = onSearchClear;
        } else {
            iconProps.name = 'md-search';
            iconProps.onPress = onSearchPress;
        }

        return (
            <View>
                <Icon style={this.changeColor()} {...iconProps}/>
            </View>
        );
    }
}