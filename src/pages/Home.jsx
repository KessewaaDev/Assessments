import React from 'react'
import Firstpage from '../Firstpage'
import Secondpart from '../Secondpart'
import Fourthpart from '../Fourthpart'
import Reviewspage from '../Reviewspage'
import Fequentlyasked from '../Fequentlyasked'
import Expertadvice from '../Expertadvice'

const Home = () => {
  return (
    <div className="content-area">
        <Firstpage />
        <Secondpart />
        <Fourthpart />
        <Reviewspage />
        <Fequentlyasked />
        <Expertadvice />

    </div>
  )
}

export default Home