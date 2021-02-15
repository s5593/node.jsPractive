import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function LoginScreen({navigation}){

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
                    navigation.replace("StackNav")}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default LoginScreen;

