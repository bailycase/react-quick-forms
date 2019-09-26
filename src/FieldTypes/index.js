import React from 'react'
import Text from './Text'
import Email from './Email'
import Checkbox from './Checkbox'
import Password from './Password'
import TextArea from './TextArea'

// assign which field to use  on the field name supplied, then return default prop values

const CustomFields = {
  text: Text,
  email: Email,
  checkbox: Checkbox,
  password: Password,
  textarea: TextArea
}
const Field = ({ children, type, defaultValue, name }) => {
  return (
    <div>
      {CustomFields.hasOwnProperty(type) ? (
        CustomFields[type]({ type, children, defaultValue, name })
      ) : (
        <input type={type} />
      )}
    </div>
  )
}

export default Field
