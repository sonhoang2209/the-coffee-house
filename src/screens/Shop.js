import React,{useState} from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView } from 'react-native'

import { MethodHeader } from '../components/Methods';
import ListItem from '../components/ListItem';

const DATA = [
    {
        id:1,
        title:'ca phe sua da chai fresh 250ML',
        introduction:"Van la huong vi ca phe sua dam da quen thuoc cua chung toi nhung khoac len minh bo quna ao moi tien loi hon, tiet kiem va phu hop hon voi nhieu nguoi",
        price:79000,
        image:require('../../images/products/coffee-250ml.jpg')
    },
    {
        id:2,
        title:'ca phe sua da chai fresh 250ML',
        introduction:"Van la huong vi ca phe sua dam da quen thuoc cua chung toi nhung khoac len minh bo quna ao moi tien loi hon, tiet kiem va phu hop hon voi nhieu nguoi",
        price:79000,
        image:require('../../images/products/coffee-milk-250ml.jpg')
    },
]


export default function Shop() {

    return (
        <View style={{flex:1}}>
            <View style={[styles.container, {paddingBottom:5}]}>
                <MethodHeader />
            </View>
            <View style={[styles.container, styles.controlBox]}>
                <TextInput
                    style={{ height: 40, width: '70%', backgroundColor:'#ccc', borderRadius:5 }}
                />
                <TouchableOpacity style={styles.btn}>
                    <Image 
                        source={require('../../images/icons/search.png')}
                        style={styles.btnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Image 
                        source={require('../../images/icons/heart.png')}
                        style={styles.btnImage}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shopList}>
                <View>
                    <ListItem data={DATA} title='Dang duoc yeu thich' />
                    <ListItem data={DATA} title='Ca phe' />
                </View>
            </ScrollView>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {paddingVertical: 15,paddingHorizontal: 15, width:"100%"},
    controlBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#dfdfdf',
        borderBottomWidth:1,
        borderBottomColor:"#aaa"
    },
    dropdown: {
        width:'80%',
        borderWidth:1,
        borderColor:"#000"
    },
    btnImage: {
        width: 16,
        height:16,
    },
    btn: {
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ccc",
        borderRadius:5
    },
    shopList: {
        backgroundColor:"#dfdfdf",
        padding:15
    }
});