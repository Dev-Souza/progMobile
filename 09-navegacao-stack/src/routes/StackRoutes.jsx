import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ConfigScreen from "../screens/ConfigScreen"

//Criando a navegação STACK
const Stack = createStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen} 
                options={{ 
                    title: 'Inicio' 
                }}
            /> 
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} /> 
            <Stack.Screen name='ConfigScreen' component={ConfigScreen} /> 
        </Stack.Navigator>
    )
}