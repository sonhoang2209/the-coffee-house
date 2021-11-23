import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,ScrollView, ImageBackground,Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Barcode from '../components/Barcode';
import Methods from '../components/Methods';
import Banner from '../components/Carousel';
import Discover from '../components/Discover';

const HEIGHT = Dimensions.get("window").height;

export default function Home() {
    return (
        <View style={{flex:1,backgroundColor:"#F3EDD5"}}>
            <View style={{flex:1,paddingVertical: 15,paddingHorizontal: 15,position:"absolute", width:"100%"}}>
                <Header />
                <Barcode />
            </View>
            <ScrollView style={styles.scrollBoxWrapper}>
                <View style={styles.scrollBox}>
                    <View></View>
                    <Methods />
                    <Banner />
                    <Discover />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollBox: {
        flex:1,
        backgroundColor:"#fff",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        padding:15,
        marginBottom:HEIGHT/2 + 30
    },
    scrollBoxWrapper: {
        flex:3,
        backgroundColor:'transparent',
        paddingVertical:HEIGHT/2,
    },
    text: {
        fontSize:16,
        fontWeight:'600'
    }
});