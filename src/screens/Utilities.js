import React,{useState,useEffect} from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView,Dimensions } from 'react-native'
import { HeaderNavigation } from '../components/Header'

const WIDTH = Dimensions.get("window").width;

export default function Utilities() {
    return (
        <ScrollView>
            <View style={{padding:15, backgroundColor:'#fff'}}>
                <HeaderNavigation text="Khac" />
            </View>
            <View style={[styles.boxs, styles.container]}>
                <Text style={styles.boxTitle}>Tien ich</Text>
                <TouchableOpacity style={[styles.box, styles.bigBox]}>
                    <Image style={styles.icons} source={require('../../images/icons/history.png')} />
                    <Text style={styles.boxText}>Lich su don hang</Text>
                </TouchableOpacity>
                <View style={styles.boxDuo}>
                    <TouchableOpacity style={styles.box}>
                        <Image style={styles.icons} source={require('../../images/icons/music-note.png')} />
                        <Text style={styles.boxText}>Nhac dang phat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Image style={styles.icons} source={require('../../images/icons/notepad.png')} />
                        <Text style={styles.boxText}>Dieu khoan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.boxs, styles.container]}>
                <Text style={styles.boxTitle}>Ho tro</Text>
                <View style={styles.boxList}>
                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <Image style={styles.icon} source={require('../../images/icons/star-ol.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Danh gia don hang</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowBtn}>
                        <Image style={styles.icon} source={require('../../images/icons/message.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Lien he gop y</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.boxs, styles.container]}>
                <Text style={styles.boxTitle}>Tai khoan</Text>
                <View style={styles.boxList}>
                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <Image style={styles.icon} source={require('../../images/icons/user.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Thong tin ca nhan</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <Image style={styles.icon} source={require('../../images/icons/address.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Dia chi da luu</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowBtn, styles.borderBt]}>
                        <Image style={styles.icon} source={require('../../images/icons/settings.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Cai dat</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowBtn}>
                        <Image style={styles.icon} source={require('../../images/icons/log-out.png')} />
                        <Text style={[styles.boxText, {width:WIDTH*0.7}]}>Dang xuat</Text>
                        <Image style={styles.iconArrow} source={require('../../images/icons/right-arrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {paddingTop: 15,paddingHorizontal: 15, width:"100%"},
    boxTitle: {
        fontSize:24,
        fontWeight:'600',
        marginBottom:10,
        color:'#040404'
    },
    box: {
        backgroundColor:'#fff',
        marginBottom:10,
        paddingLeft:15,
        paddingVertical:15,
        borderRadius:10,
        width: WIDTH /2 -15 - 5
    },
    boxList:{
        backgroundColor:'#fff',
        marginBottom:10,
        paddingLeft:15,
        borderRadius:10,
        width: '100%'
    },
    boxDuo: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bigBox: {
        width:'100%'
    },
    icon: {
        width:20,
        height:20,
        marginRight:15
    },
    icons: {
        marginBottom:15,
        width:24,
        height:24
    },
    iconArrow: {
        width:12,
        height:12
    },
    boxText: {
        fontSize:16,
        fontWeight:'600'
    },
    boxs: {
        marginBottom:15
    },
    rowBtn: {
        paddingVertical:15,
        flexDirection:'row',
        alignItems:'center',
    },
    borderBt: {
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    }
})