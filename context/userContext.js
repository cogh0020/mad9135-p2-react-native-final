import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

  const [triviaQuestions, setTriviaQuestions] = React.useState([])
  const [questionCount, setQuestionCount] = React.useState(5)

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${questionCount}`)
    .then(res => res.json())
    .then(data =>{
      setTriviaQuestions(data.results)
      console.log(data.results)
    })
  }, [])

  return <Context.Provider value={[triviaQuestions, questionCount, setQuestionCount]}{...props}/>
}

function useContext() {
  const context = React.useContext(Context)

  if (!context) {
    throw new Error("Cannot find context")
  }
  return context
}

export {useContext, ContextProvider}