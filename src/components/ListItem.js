import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView,NumberFormat,Intl } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export function Item({item, index}) { 
    const navigation = useNavigation();
    return(
        <TouchableOpacity key={index} style={styles.itemBox} onPress={() => navigation.navigate('ProductDetail')}>
            <View style={styles.itemContent}>
                <Text numberOfLines={1} style={styles.itemTitle}>{item?.title}</Text>
                <Text numberOfLines={2} style={styles.itemIntro}>{item?.introduction}</Text>
                <Text style={styles.itemPrice}>{item?.price}đ</Text>
            </View>
            <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
    )
}

export function ItemProduct({item, index}) {
    return(
        <TouchableOpacity key={index} style={styles.itemBox}>
            <View style={styles.itemContent}>
                <Text numberOfLines={1} style={styles.itemTitle}>{item?.name}</Text>
                <Text numberOfLines={2} style={styles.itemIntro}>{item?.description}</Text>
                <Text style={styles.itemPrice}>{item?.base_price}đ</Text>
            </View>
            <Image source={{uri: item?.image?.[0]}} style={styles.itemImage} />
        </TouchableOpacity>
    )
}

export default function ListItem({data, title}) {
    return (
        <View style={styles.listBox}>
            <Text style={styles.listTitle}>{title}</Text>
            {
                data.map((item, index) => {
                    return(
                        <Item item={item} index={index} key={index} />
                    )
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    listBox: {
        marginBottom:15
    },
    listTitle: {
        fontSize:20,
        fontWeight:'900',
        marginBottom:5
    },
    itemBox:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10
    },
    itemContent:{
        flex:2,
        marginRight:15,
        justifyContent:'space-between',
        
    },
    itemImage: {
        width:90,
        height:90,
        flex:1,
        borderRadius:5
    },
    itemTitle: {
        fontSize:15,
        fontWeight:"900",
        textTransform:'capitalize'
    },
    itemIntro: {
        fontSize:14,
    },
    itemPrice: {
        fontSize:16
    }
});