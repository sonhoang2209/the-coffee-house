import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';

function Item() { 
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('AccountTest')}>
            <View>
                <Text numberOfLines={1}>test b</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Wishlist({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('AccountTest')}><Text>Wishlist</Text></TouchableOpacity>
            <Item />
        </View>
    )
}
