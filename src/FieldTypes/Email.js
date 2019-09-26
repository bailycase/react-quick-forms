import React from 'react'

export const Email = ({ type, children, defaultValue, name }) => {
  return (
    <div>
      <label>Email</label>
      <input id={`quickform-${name}`} type={name} />
    </div>
  )
}

export default Email
