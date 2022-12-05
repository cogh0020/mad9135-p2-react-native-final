import React from 'react'
import Questions from '../components/Questions'
import Details from '../components/Details'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const UserStackNavigation = () => {

  return(
    <Stack.Navigator>
      <Stack.Screen name="Questions" component={Questions}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  )
}

export {UserStackNavigation}