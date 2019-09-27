import React from 'react'
import Text from './Text'
import Email from './Email'

/*
  Register fields with context
*/
const CustomFields = {
  text: Text,
  email: Email
}
const Field = ({
  children,
  type,
  defaultValue,
  name
}) => {
  return (
    <div>
      {CustomFields.hasOwnProperty(type) ? (
        CustomFields[type]({type, children, defaultValue, name})
      ) : (
        <input type={type} />)}
    </div>
  )
}

export default Field
