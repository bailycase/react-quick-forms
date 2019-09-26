import React from 'react'

export const Checkbox = ({ name, children, defaultValue, type }) => {
  return (
    <div>
      <label>Checkbox</label>
      <input id={`quickform-${name}`} type={type} />
    </div>
  )
}

export default Checkbox
