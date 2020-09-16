import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

import { connect } from 'react-redux'

import { fetchStocks } from '../redux/actions/stocks'

const StocksOverviewScreen = (props) => {

    useEffect(() => {
        console.log('Use Effect')
        props.fetchStocks()
    }, [fetchStocks])

    /**  useEffect(() => {
        const willFocusSub = props.navigation.addListener(
             'willFocus',
             printmessage
         );
         return () => {
             willFocusSub.remove();
         };
     }, [printmessage]);
 
 */
    const printmessage = () => {
        return console.log('S-a incarcat')
    }

    return (
        <View>
            <Text>Stocks Overview Screen</Text>
            <Button title="Go to Next Page" onPress={() => { props.navigation.navigate('StockDetail') }} />
        </View>
    )
}

const mapStateToProps = state => ({
    stocks: state.stocks
})

export default connect(mapStateToProps, { fetchStocks })(StocksOverviewScreen)