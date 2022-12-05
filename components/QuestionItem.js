import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function QuestionItem({question, onPress}){

  return(
    <TouchableOpacity onPress={onPress}>
      <Text>{question.question}</Text>
    </TouchableOpacity>
  )
}