import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

export class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={style.container}>
                <Header navigate={navigate} message='Press to Login' />
                <Hero />
                <Menu  navigate={navigate} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})


// klucz API
// AIzaSyArKk_8pR9Cmsh8ZghmihNSH0giZdxXC8U