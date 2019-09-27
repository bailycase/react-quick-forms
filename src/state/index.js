import React, {useReducer, createContext} from 'react'

/*
    This component should allow multiple fields to put their values into context or 'state'
*/

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {...state}
    case 'reset':
      return {...state}
    case 'register':
      return {...state}
  }
}

export const FormState = ({defaultValues}) => {
  const [state, dispatch] = useReducer(reducer, {
    defaultValues
  })
}

// Export the context

const FormContext = React.createContext({})

export { FormContext}
