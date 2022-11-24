import React from 'react'

const Name = (props) => {
    const {name} = props
  return (
    <h3 className="py-2">Hello,My name is {name}</h3>
  )
}

export default Name