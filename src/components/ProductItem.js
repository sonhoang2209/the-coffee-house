import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView, Dimensions,SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
    'https://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-quang-cao-quan-ao.jpg',
    'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
];

const ProductItem = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.wrap}>
                <Swiper
                    loop
                >
                    <Image 
                        source={require('../../images/font/intro-1.jpg')}
                        resizeMode='cover'
                        style={styles.image}
                    />
                    <Image 
                        source={require('../../images/font/intro-1.jpg')}
                        resizeMode='cover'
                        style={styles.image}
                    />
                    <Image 
                        source={require('../../images/font/intro-1.jpg')}
                        resizeMode='cover'
                        style={styles.image}
                    />
                </Swiper>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex:1,
    },
    image: {
        width:'100%',
        height:'100%'
    }

    
});

export default ProductItem;