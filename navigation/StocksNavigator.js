import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'


import StocksOverviewScreen from '../screens/StocksOverviewScreen'
import StockDetailScreen from '../screens/StockDetailScreen'
import AuthScreen from '../screens/AuthScreen'

const StocksNavigator = createStackNavigator({
    StocksOverview: StocksOverviewScreen,
    StockDetail: StockDetailScreen
})

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Stocks: StocksNavigator
})
export default createAppContainer(MainNavigator)