import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import StocksOverviewScreen from '../screens/StocksOverviewScreen'

const StocksNavigator = createStackNavigator({
    StocksOverview: StocksOverviewScreen
})

export default createAppContainer(StocksNavigator)