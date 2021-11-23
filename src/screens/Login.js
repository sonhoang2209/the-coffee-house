import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

export default function Login({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <Button
                title="Log in"
                onPress={() => navigation.push('Main')}
            />
        </View>
    )
}
