import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.head}>
            <View  style={{flex:1, flexDirection:"row",alignItems:"center",}}>
                <Image source={require('../../images/icons/cloudy.png')} />
                <Text style={styles.headText}>Xin chào, son</Text>
            </View>
            <View style={{flex:1, flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                <TouchableOpacity>
                    <View style={styles.buttonCircle}>
                        <Image style={{width:24,height:24}} source={require('../../images/icons/voucher.png')} />
                        <Text style={{fontSize:16, marginLeft:10}}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.buttonCircle}>
                        <Ionicons name='notifications-outline' size={24} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderNavigation({text}) {
    return (
        <View style={styles.head}>
            <View  style={{flex:1, flexDirection:"row",alignItems:"center",}}>
                <Text style={styles.headText}>{text}</Text>
            </View>
            <View style={{flex:1, flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                <TouchableOpacity>
                    <View style={styles.buttonCircle}>
                        <Image style={{width:24,height:24}} source={require('../../images/icons/voucher.png')} />
                        <Text style={{fontSize:16, marginLeft:10}}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonCircle}>
                    <View>
                        <Ionicons name='notifications-outline' size={24} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    buttonCircle: {
        flexDirection:"row",
        alignItems:"center",
        shadowColor:"#ccc",
        shadowColor: "#000",
        borderRadius:25,
        backgroundColor:'#fff',
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginLeft:5,
        elevation: 20,
        shadowColor: '#000',
    },
    headText: {
        marginLeft:20,
        fontSize:17,
        fontWeight:"900"
    }
});