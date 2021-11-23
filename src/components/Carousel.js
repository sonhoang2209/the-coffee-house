import React,{useRef, useState} from 'react'
import { View, Text, Image,StyleSheet,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper';

const WIDTH = Dimensions.get("window").width;
export default function Banner() {
    

    const [data, setData] = useState([
        {
            image:require('../../images/font/intro-1.jpg')
        },
        {
            image:require('../../images/font/intro-1.jpg')
        }
        ,
        {
            image:require('../../images/font/intro-1.jpg')
        }
        ,
        {
            image:require('../../images/font/intro-1.jpg')
        }
    ])

    return (
        <View style={{height:230, marginTop:15}}>
            <Swiper
                loop
                autoplay
                dot={
                    <View style={{
                        width:30,
                        height:2,
                        borderRadius:1,
                        margin:1,
                        backgroundColor:'#ddd'
                    }}
                    ></View>
                }
                activeDot={
                    <View style={{
                        width:30,
                        height:3,
                        borderRadius:2,
                        margin:1,
                        backgroundColor:'#000'
                    }}
                    ></View>
                }
                
            >
                {
                    data.map((item, index) => {
                        return(
                            <Image key={index} source={item.image} resizeMode='cover' style={styles.image} />
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width:WIDTH - 40,
        height:180,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
});