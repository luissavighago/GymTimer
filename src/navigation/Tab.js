import React  from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import Maps  from '../screens/Maps/Maps'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name){
            case 'Home': 
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Maps':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#99D5FF',
        tabBarActiveBackgroundColor: '#0496FF',
        tabBarInactiveBackgroundColor: '#0496FF',
        headerShown: false,
        tabBarShowLabel: false
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Maps" component={Maps}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
)