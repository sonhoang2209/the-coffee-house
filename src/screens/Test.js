import React, {useState, useEffect} from 'react';
import { Text,StyleSheet, View,TouchableOpacity, Image,FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import { ItemProduct } from '../components/ListItem';

const Test = () => {

	const [data, setData] = useState([])
	const [dataFlat, setDataFlat] = useState([])

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

    console.log(data)

	return (
		<View>
      <Text>aaS</Text>
      {
        data.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item?.name}</Text>
              {/* {
                item.products.map((itemProduct, i) => {
                  return (
                    // <ItemProduct item={item} index={index} />
                    <TouchableOpacity key={i} style={styles.itemBox}>
                      <View style={styles.itemContent}>
                          <Text numberOfLines={1} style={styles.itemTitle}>{itemProduct?.name}</Text>
                          <Text numberOfLines={2} style={styles.itemIntro}>{itemProduct?.description}</Text>
                          <Text style={styles.itemPrice}>{itemProduct?.base_price}đ</Text>
                      </View>
                      <Image source={{uri: itemProduct?.image?.[0]}} style={styles.itemImage} />
                    </TouchableOpacity>
                  )
                })
                
              } */}
              <FlatList
                    data={item?.products}
                    renderItem={ItemProduct}
                    keyExtractor={item => item.id}
                    horizontal={false}
                />
            </View>
          )
        })
      }
    </View>
    
	);
};

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

export default Test;