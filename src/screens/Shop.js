import React, {useEffect, useState} from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet,Dimensions } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

const WIDTH = Dimensions.get('window').width;

export default function Shop() {
    const viewStore = () => navigation.navigate('StoreLocationDetails')

    const [data, useData] = useState([]);
    const [isLoading, useIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.thecoffeehouse.com/api/v5/stores/all')
          .then(({ data }) => {
            // console.log("data", data.stores)
            useData(data.stores)
          })
          .catch((error) => console.error(error))
          .finally(() => useIsLoading(false));
    }, []);

    const ListHeader = () => (
            <View>
                <View style={{backgroundColor: '#FFF', flexDirection: 'row',}}>
                    <View>
                        <Ionicons name="search-outline" size={20} color="#000" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Tìm kiếm"
                        />
                    </View>
                    <TouchableOpacity style={styles.btnMap}>
                        <Ionicons name="map-outline" size={20} color="#000" style={styles.iconMap} />
                        <Text style={styles.txtMap}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleContent}>Các cửa hàng khác</Text>
            </View>
        )

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
            onPress={viewStore}
            // onPress={()=>this.callApi()}
            style={styles.locationtItem}>
                <Image
                    style={styles.locationImages}
                    source={{ uri: item?.images[0] }}
                    />
                <View style={styles.locationInfo}>
                    <Text 
                    style={styles.name}
                    numberOfLines={1}
                    ellipsizeMode= 'tail'
                    >{item.name}</Text>
                    <Text 
                    style={styles.location}
                    numberOfLines={2}
                    ellipsizeMode= 'tail'
                    >{item?.full_address}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#EEE'}}>
                <FlatList
                    ListHeaderComponent={ListHeader}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EEE',
        marginHorizontal: 16,
        width: WIDTH*0.7,
        height: 40,
        borderRadius: 10,
        paddingLeft: 42,
        marginBottom: 16,
    },
    icon: {
        top: 30,
        left: 30,
        zIndex: 1,
    },
    btnMap: {
        flexDirection: 'row',
        padding: 16,
        top: 15,
        left: -15,
    },
    txtMap: {
        color: '#000',
        margin: 2,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    titleContent: {
        marginHorizontal: 16,
        marginVertical: 8,
        marginTop: 20,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationtItem: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 5,
        padding: 16,
    },
    locationImages: {
        width: WIDTH*0.2,
        height: WIDTH*0.2,
        borderRadius: 8,
    },
    locationInfo: {
        marginHorizontal: 16,
    },
    name: {
        width: WIDTH*0.6,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
    },
    location: {
        color: '#000',
        width: WIDTH*0.6,
        fontSize: 16,
        marginBottom: 5,
    }
});