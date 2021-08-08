import React  from "react"
import { SafeAreaView} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import SignIn  from './screens/SignIn/SignIn'
import SignUp  from './screens/SignUp/SignUp'
import Preload  from './screens/Preload/Preload'

const Stack = createStackNavigator()

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Preload' screenOptions={screenOptions}>
                <Stack.Screen name="Preload" component={Preload}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)

const screenOptions = {
    headerShown: false
}