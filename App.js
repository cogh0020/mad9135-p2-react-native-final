import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// screen imports
import HomeScreen from './components/HomeScreen'
import Details from './components/Details'

// navigation elements
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// context imports
import { ContextProvider } from './context/userContext'

// expo api imports
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={Details} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ContextProvider>
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
