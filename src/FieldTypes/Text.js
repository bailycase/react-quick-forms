import React from 'react'

export const text = ({ type, children, defaultValue, name }) => {
  return (
    <div>
      <label>text</label>
      <input id={`quickform-${name}`} type={type} />
    </div>
  )
}

export default text
