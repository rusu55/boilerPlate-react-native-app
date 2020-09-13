import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'


const StockDetailScreen = (props) => {
    useEffect(() => {
        console.log('S-a Incarcat Stock Detail')
    }, [])
    return (
        <View>
            <Text>Stock Detail Screen</Text>
            <Button title="go back" onPress={() => { props.navigation.navigate("StocksOverview") }} />
        </View>
    )
}

export default StockDetailScreen