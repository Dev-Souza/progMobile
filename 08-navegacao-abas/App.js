import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='Inicio' 
            component={HomeScreen} 
            options={{
              title: 'Inicio',
              // headerTitleAlign: 'center',
              // headerStyle: {
              //   backgroundColor: "yellow"
              // },
              // tabBarInactiveTintColor: 'black',
              // tabBarActiveTintColor: 'yellow',
              tabBarIcon: ({ color, size}) => <Ionicons name='home-outline' color={color} size={size} />
            }}/>
          <Tab.Screen 
            name='Profile' 
            component={ProfileScreen}
            options={{
              title: 'Inicio',
              tabBarIcon: ({ color, size}) => <Ionicons name='person-outline' color={color} size={size} />
            }}/>
          <Tab.Screen 
            name='Settings' 
            component={SettingsScreen} 
            options={{
              title: 'Inicio',
              tabBarIcon: ({ color, size}) => <Ionicons name='settings-outline' color={color} size={size} />
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}