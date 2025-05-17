import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MegaSenaScreen from './screens/MegaSenaScreen';
import {Ionicons} from '@expo/vector-icons';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

export default function App() {
  
  const Tab = createBottomTabNavigator()
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='MegaSena'
            component={MegaSenaScreen}
            options={{
              tabBarIcon: ({ color, size}) => <Ionicons name='home-outline' color={color} size={size} />
            }}/>
          <Tab.Screen 
            name='Jogo do Bicho'
            component={JogoDoBichoScreen}
            options={{
              tabBarIcon: ({ color, size}) => <Ionicons name='home-outline' color={color} size={size} />
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
