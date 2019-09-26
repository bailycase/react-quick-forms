import React from 'react'

const Form = (props) => {
  console.log(props)
  return (
    <form onSubmit={e => { e.preventDefault() }}>
      {props.children}
    </form>
  )
}

export default Form
