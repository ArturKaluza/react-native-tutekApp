import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Adress'
        }
    }

    clearFields = () => this.setState({name: '', msg: '', email: ''});

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={style.container}>
                <Header navigate={navigate} message = "Press to Login" />
                <Text style={style.heading} >Contact Us</Text>

                <TextInput
                    style={style.inputs}
                    onChangeText={text => this.setState({name: text})}
                    value={this.state.name}
                />
                
                <TextInput
                    style={style.multiInputs}
                    onChangeText={text => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline = {true}
                    numberOfLines = {4}
                />

                 <TextInput
                    style={style.inputs}
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style = { style.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style = { style.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>

            </View>
        );
    };
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInputs: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
})