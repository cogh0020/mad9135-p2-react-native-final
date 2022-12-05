import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { useContext } from '../context/userContext'
import {SafeAreaView} from 'react-native-safe-area-context'

function Details({route}){

  console.log(route.params)

  return(
    <SafeAreaView>
      <View>
        <Text>{route.params.question.question}</Text>
        <Text>{route.params.question.correct_answer}</Text>
        <Text>{route.params.question.incorrect_answers[0]}</Text>
        <Text>{route.params.question.incorrect_answers[1]}</Text>
        <Text>{route.params.question.incorrect_answers[2]}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Details