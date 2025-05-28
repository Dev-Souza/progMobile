import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AlunosListaScreen from '../screens/AlunosListaScreen'
import AlunosFormsScreen from '../screens/AlunosFormsScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='AlunosListaScreen' 
                component={AlunosListaScreen}
                options={{
                    title: "Lista de Alunos",
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen 
                name='AlunosFormsScreen' 
                component={AlunosFormsScreen}
                options={{
                    title: "Formulário",
                    headerTitleAlign: 'center'
                }} />
        </Stack.Navigator>
    )
}