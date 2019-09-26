import React from 'react'

export const text = ({id, name}) => {
  return (
    <div>
      <label>text</label>
      <input id={`quickform-${name}`} type={name} />
    </div>
  )
}

export default text
