import React from 'react'

export const Password = ({ type, children, defaultValue, name }) => {
  return (
    <div>
      <label>Password</label>
      <input id={`quickform-${name}`} type={type} />
    </div>
  )
}

export default Password
