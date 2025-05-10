import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ProfileSceen from '../screens/ProfileScreen'
import ConfigScreen from '../screens/ConfigScreen'
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }} />
      <Drawer.Screen
        name='ProfileScreen'
        component={ProfileSceen}
        options={{
          title: 'Usuário',
          drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
        }} />
      <Drawer.Screen 
        name='ConfigScreen' 
        component={ConfigScreen} 
        options={{
          title: 'Configurações',
          drawerIcon: ({color, size}) => <Ionicons name='settings' color={color} size={size}/>
        }}/>
    </Drawer.Navigator>
  )
}