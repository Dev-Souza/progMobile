import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import EscudoScreen from '../screens/EscudoScreen'
import JogadorScreen from '../screens/JogadorScreen'
import TituloScreen from '../screens/TituloScreen'
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
                title: 'Escudo',
                drawerIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
            }}
        />
        <Drawer.Screen 
            name='JogadorScreen'
            component={JogadorScreen}
            options={{
                title: 'Jogador',
                drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
        />
        <Drawer.Screen 
            name='TituloScreen'
            component={TituloScreen}
            options={{
                title: 'Titulo',
                drawerIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
            }}
        />
    </Drawer.Navigator>
  )
}