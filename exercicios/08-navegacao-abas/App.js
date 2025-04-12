import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Escudo from './screens/EscudoScreen';
import Jogador from './screens/JogadoresScreen';
import Titulo from './screens/TitulosScreen';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='Escudo' 
            component={Escudo} 
            options={{
              title: 'Escudo',
              tabBarActiveTintColor: 'red',
              tabBarIcon: ({ color, size}) => <Ionicons name='shield-outline' color={color} size={size} />
            }}/>
          <Tab.Screen 
            name='Jogadores' 
            component={Jogador}
            options={{
              title: 'Jogadores',
              tabBarIcon: ({ color, size}) => <Ionicons name='person-outline' color={color} size={size} />
            }}/>
          <Tab.Screen 
            name='Titulos' 
            component={Titulo} 
            options={{
              title: 'Titulos',
              tabBarIcon: ({ color, size}) => <Ionicons name='trophy-outline' color={color} size={size} />
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
