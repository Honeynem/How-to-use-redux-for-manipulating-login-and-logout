import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const selector = useSelector((state)=> state.user)
  return (
    <div>
      Contact {selector.username}
    </div>
  )
}

export default Contact
