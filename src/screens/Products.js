import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView } from 'react-native'
import { HeaderNavigation } from '../components/Header'

export default function Products() {
    return (
        <View style={{flex:1}}>
            <View style={[styles.container, {paddingBottom:5}]}>
                <HeaderNavigation text="Cua Hang" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {paddingVertical: 15,paddingHorizontal: 15, width:"100%"},
});
