import React from 'react'

export const text = ({id, name}, props) => {
  console.log(props)
  return (
    <div>
      <label>email</label>
      <input id={`quickform-${name}`} type={name} />
    </div>
  )
}

export default text
