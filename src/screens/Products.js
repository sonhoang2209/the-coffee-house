import React,{useState, useEffect} from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView, Dimensions } from 'react-native'

import { MethodHeader } from '../components/Methods';
import ListItem from '../components/ListItem';
import axios from 'axios';

const WIDTH = Dimensions.get('window').width;

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
            <ScrollView>
                <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between'}}>
                    {
                        data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.category}>
                                <Image style={styles.thumbnail} source={{uri : item?.thumbnail}} />
                                <Text numberOfLines={2} style={{textAlign:'center'}}  >{item?.name}</Text>
                            </TouchableOpacity>
                        )
                        })
                    }
                    <TouchableOpacity key="8" style={styles.category}>
                        <Image style={styles.thumbnail} source={require('../../images/icons/more.png')} />
                        <Text numberOfLines={2} style={{textAlign:'center'}} >Khác</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopList}>
                    {
                        data.map((item, index) => {
                        return (
                            <ListItem data={item?.products} title={item?.name} key={index} />
                        )
                        })
                    }
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
        padding:15
    },
    category: {width:(WIDTH - 80) /4, alignItems:'center', marginHorizontal:10, marginVertical:10},
    thumbnail:{width:"80%",height:WIDTH*0.2*0.8,marginBottom:5}
});
