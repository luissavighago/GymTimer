import React  from "react"
import {createStackNavigator} from '@react-navigation/stack'
import SignIn  from '../screens/SignIn/SignIn'
import SignUp  from '../screens/SignUp/SignUp'
import Preload  from '../screens/Preload/Preload'
import Tab from './Tab'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='Preload' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Tab" component={Tab}/>
    </Stack.Navigator>
)