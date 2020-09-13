import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'


import StocksOverviewScreen from '../screens/StocksOverviewScreen'
import StockDetailScreen from '../screens/StockDetailScreen'

const StocksNavigator = createStackNavigator({
    StocksOverview: StocksOverviewScreen,
    StockDetail: StockDetailScreen
})

export default createAppContainer(StocksNavigator)