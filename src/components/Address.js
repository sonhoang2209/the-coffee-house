import React,{useState} from 'react'
import { View, Text,Picker } from 'react-native'

export default function Address() {
    const [selectedValue, setSelectedValue] = useState();

    const renderPicker = () => {
        return (
            <View>
                <Text>sd</Text>
                <Text>text2</Text>
            </View>
        )
    }

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label={renderPicker} value="java" />
            </Picker>
        </View>
    )
}
