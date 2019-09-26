import React from 'react'
import Text from './Text'
import Email from './Email'

// assign which field to use  on the field name supplied, then return default prop values

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
