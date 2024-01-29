import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const selector = useSelector((state)=>state.user)
  return (
    <div>
      Home {selector.username}
    </div>
  )
}

export default Home
