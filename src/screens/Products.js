import React,{useState, useEffect} from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView } from 'react-native'

import { MethodHeader } from '../components/Methods';
import ListItem from '../components/ListItem';

import axios from 'axios';

export default function Products() {

    const [data, setData] = useState([])
    useEffect(() => {
        const getProductList = async () => {
            try {
                const response = await axios.post('https://api.thecoffeehouse.com/api/v5/menu');
                setData(response?.data.menu)
            } catch (error) {
                console.error(error);
            }
        }
        getProductList()
    }, [])

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
                {
                    data.map((item, index) => {
                    return (
                        <ListItem data={item?.products} title={item?.name} key={index} />
                    )
                    })
                }
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
