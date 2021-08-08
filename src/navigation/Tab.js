import React  from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import Maps  from '../screens/Maps/Maps'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Maps" component={Maps}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
)