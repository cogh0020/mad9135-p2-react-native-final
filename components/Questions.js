import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useContext} from '../context/userContext'
import QuestionItem from './QuestionItem'


function Questions({navigation}){

  const [triviaQuestions] = useContext()

  if (!triviaQuestions){
    return null
  } else {
    return (
      <SafeAreaView>
        <View>
          <FlatList
          data={triviaQuestions}
          renderItem = {({item})=>(
            <QuestionItem
            question={item}
            onPress={()=> navigation.navigate('Details', {question: item} )}
            />
          )}
          keyExtractor={item =>item.question}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default Questions