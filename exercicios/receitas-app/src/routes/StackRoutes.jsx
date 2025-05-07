import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ReceitaScreen from "../screens/ReceitaScreen"

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
            <Stack.Screen name='ReceitaScreen' component={ReceitaScreen} />  
        </Stack.Navigator>
    )
}