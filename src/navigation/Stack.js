import React  from "react"
import {createStackNavigator} from '@react-navigation/stack'
import SignIn  from '../screens/SignIn/SignIn'
import SignUp  from '../screens/SignUp/SignUp'
import Preload  from '../screens/Preload/Preload'
import Tab from './Tab'
import ProfileEdit  from '../screens/Profile/ProfileEdit'
import Activities from '../screens/Profile/Activities'
import Camera from '../components/Camera'
import ModalWebView from '../components/ModalWebView'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='Preload' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ModalWebView" component={ModalWebView}/>
        <Stack.Screen name="Camera" component={Camera}/>
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="ProfileEdit" options={{headerShown:true, headerTitle:'Editar Perfil',headerStyle:{backgroundColor: '#0496FF'},
            headerTintColor: '#fff',headerTitleStyle:{fontWeight: 'bold'}}}  component={ProfileEdit}/>
        <Stack.Screen name="Activities" options={{headerShown:true, headerTitle:'Atividades',headerStyle:{backgroundColor: '#0496FF'},
            headerTintColor: '#fff',headerTitleStyle:{fontWeight: 'bold'}}}  component={Activities}/>
    </Stack.Navigator>
)