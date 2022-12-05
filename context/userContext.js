import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

  return <Context.Provider />
}



function useContext() {
  const context = React.useContext(Context)

  if (!context) {
    throw new Error("Cannot find context")
  }
  return context
}

export {useContext, ContextProvider}