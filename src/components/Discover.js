import React from 'react'
import { View,StyleSheet, Text,Image, Dimensions,TouchableOpacity } from 'react-native'

const WIDTH = Dimensions.get("window").width;
const WIDTH_ITEM = (WIDTH - 40)/2 - 5;

const DATA = [
    {
        id: 1,
        name: `đổi điểm nhanh lấy ưu đãi xịn - vi vu với "người thương"`,
        date:'18/10',
        image:require('../../images/font/discover-2.jpg')
    },
    {
        id: 2,
        name: `đổi điểm nhanh lấy ưu đãi xịn - vi vu với "người thương"`,
        date:'18/10',
        image:require('../../images/font/discover-1.jpg')
    },
    {
        id: 3,
        name: `đổi điểm nhanh lấy ưu đãi xịn - vi vu với "người thương"`,
        date:'18/10',
        image:require('../../images/font/discover-1.jpg')
    },
    {
        id: 4,
        name: `đổi điểm nhanh lấy ưu đãi xịn - vi vu với "người thương"`,
        date:'18/10',
        image:require('../../images/font/discover-2.jpg')
    },
]

export default function Discover() {

    return (
        <View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Khám phá thêm </Text>
                <Image source={require('../../images/icons/star.png')} style={{width:24,height:24}} />
            </View>
            <View style={styles.discoverContent}>
                {
                    DATA.map((item, index) => {
                        return  (
                            <TouchableOpacity style={[styles.itemProduct]} key={index}>
                                <View style={product.thumbnail}>
                                    <Image
                                        style={product.image}
                                        source={item?.image}
                                    />
                                </View>
                                <View style={product.content}>
                                    <Text style={product.itemTitle}>{item.name}</Text>
                                    <View style={product.dateBox}>
                                        <Image source={require('../../images/icons/star.png')} style={{width:24,height:24, marginRight:10}} />
                                        <Text>{item.date}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        flexDirection:'row',

    },
    title: {
        fontSize:15,
        fontWeight:"900",
        color:"#000"
    },
    itemProduct: {
        width: WIDTH_ITEM,
        marginBottom:15
    },
    discoverContent: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:10
    }
});

const product = StyleSheet.create({
    thumbnail: {
        width:'100%'
    },
    image: {
        width:'100%',
        height:WIDTH_ITEM,
        borderRadius:10,
        marginBottom:10
    },
    itemTitle: {
        fontSize:15,
        fontWeight:'900',
        textTransform:'uppercase',
        marginBottom:5
    },
    dateBox: {
        flexDirection:'row',
        alignItems:'center'
    }
});