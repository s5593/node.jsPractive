import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function LoginScreen(props){

    return (
        <View >
            <View >
                <Text >Simple App</Text>
            </View>
            <View >
                <TextInput 
                    placeholder={"ID"}/>
                <TextInput 
                    placeholder={"Password"}/>
            </View>
            <View >
                <TouchableOpacity 
                    onPress={() => 
                    props.navigation.navigate("StackNav")}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default LoginScreen;

