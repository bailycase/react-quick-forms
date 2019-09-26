import React from 'react'

export const TextArea = ({ name, children, defaultValue, type }) => {
  return (
    <div>
      <label>TextArea</label>
      <textarea id={`quickform-${name}`} type={type} />
    </div>
  )
}

export default TextArea
