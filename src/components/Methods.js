import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,ScrollView, ImageBackground } from 'react-native'

export default function Methods() {
    return (
        <View style={styles.methods}>
            <TouchableOpacity style={[styles.method, styles.borderR]}>
                <View style={styles.methodCircle}>
                    <Image 
                        source={require('../../images/icons/delivery-man.png')}
                        style={styles.methodImage}
                    />
                </View>
                <Text style={styles.text}>Giao hang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.method}>
                <View style={styles.methodCircle}>
                    <Image 
                        source={require('../../images/icons/coffee-cup.png')}
                        style={styles.methodImage}
                    />
                </View>
                <Text style={styles.text}>Mang di</Text>
            </TouchableOpacity>
        </View>
    )
}

export function MethodHeader() {
    return (
        <TouchableOpacity style={[styles.methodHeader]}>
            <View style={[styles.methodCircle, styles.headMethod]}>
                <Image 
                    source={require('../../images/icons/delivery-man.png')}
                    style={styles.headMethodImage}
                />
            </View>
            <View style={styles.methodBoxWrapper}>
                <View style={styles.methodBox}>
                    <Text style={styles.methodText}>Giao đến</Text>
                    <Image 
                        source={require('../../images/icons/down-arrow.png')}
                        style={styles.iconArrow}
                    />
                </View>
                <Text numberOfLines={1} style={styles.address}>thap dong chung cu hoc vien quoc phong, Tay Ho, Ha Noi</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    methods: {
        flexDirection:'row',
        width:'100%',
        borderWidth:1,
        borderColor:'#aaa',
        borderRadius:15,
        padding:15,
    },
    method: {
        width:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    methodImage: {
        width:56,
        height:56,
    },
    headMethodImage: {
        width:30,
        height:30,
    },
    methodCircle: {
        width:60,
        height:60,
        backgroundColor:'#F0EAD0',
        borderRadius:30,
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center'
    },
    borderR: {
        borderRightWidth:1,
        borderRightColor:'#aaa',
    },
    text: {
        fontSize:16,
        fontWeight:'600'
    },
    methodHeader: {
        flexDirection:"row",
        paddingRight:20,
    },
    iconArrow: {
        width:12,
        height:12,
        marginLeft:5
    },
    methodText: {
        fontSize:14,
        fontWeight:'900'
    },
    methodBox: {
        flexDirection:'row',
        alignItems:'center'
    },
    headMethod: {
        height:36,
        width:36
    },
    methodBoxWrapper:{
        marginLeft:10
    },
    address: {
        fontSize:15,
    }
});