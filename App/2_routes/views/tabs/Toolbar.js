import React from 'react'
import {StyleSheet,View,Animated} from 'react-native'
import LeftElement from './toolbarSettings/LeftElement';
import CenterElement from './toolbarSettings/CenterElement';
import RightElement from './toolbarSettings/RightElement';
import {styles} from './stylesToolbar'

export default class Toolbar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isSearchActive: false, searchValue: '' };
    }
    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }
    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }
    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }
    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: '' });
    }
    render() {
        const { isSearchActive, searchValue } = this.state;

        return (
            <View style={[styles.container, isSearchActive && { backgroundColor: 'white' }]}>
                <View style={styles.toolbarContainer}>
                    <LeftElement
                        isSearchActive={isSearchActive}
                        onSearchClose={this.onSearchClosed}
                    />
                    <CenterElement
                        title="Search"
                        isSearchActive={isSearchActive}
                        onSearchTextChange={this.onSearchTextChanged}
                        searchValue={searchValue}
                    />
                    <RightElement
                        isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={searchValue}
                        onSearchClear={this.onSearchClearPressed}
                    />
                </View>
            </View>
        );
    }
}