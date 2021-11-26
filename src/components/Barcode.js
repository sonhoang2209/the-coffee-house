import React from 'react'
import { View,StyleSheet, Text,Image, ImageBackground } from 'react-native'

export default function Barcode() {
    return (
        <View>
            <ImageBackground 
                imageStyle={{ borderRadius: 15}} 
                source={require('../../images/font/backgroundCodeUser.png')} 
                style={styles.pointBox}
            >
                <Text style={[styles.text, styles.title]}>Nguyễn Hoàng Sơn</Text>
                <Text style={styles.text}>0 POINT - Newbie</Text>
                <View style={styles.barcodeWrapper}>
                    <Image 
                        style={{width:"85%",resizeMode:'cover',height:80}}
                        source={require('../../images/icons/barcode.png')}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    pointBox: {
        marginTop:15,
        backgroundColor:"#ec9441cc",
        borderRadius:10,
        padding:20
    },
    text: {
        color:"#fff",
        fontSize:16,
        marginBottom:5
    },
    title: {
        fontSize:20,
        fontWeight:'600'
    },
    barcodeWrapper: {
        backgroundColor:'#fff',
        padding:15,
        alignItems:"center",
        marginTop:20,
        borderRadius:10
    }
});