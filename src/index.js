
import React, {useReducer, useContext} from 'react'
import { FormContext} from './state'

export {default as Field} from './FieldTypes'

/*
  - Form component should wrap all fields
  - Access context and get field values
  - Return values to the onSubmit callback function
*/

const Form = ({children, onSubmit}) => {
  const formData = useContext(FormContext)
  return (
    <form onSubmit={e => {
      e.preventDefault()
      const formData = null
      onSubmit()
    }}>
      {children}
    </form>
  )
}

export {Form}
