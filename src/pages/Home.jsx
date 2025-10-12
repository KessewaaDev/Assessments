import React from 'react'
import Firstpage from '../Firstpage'
import Secondpart from '../Secondpart'
import Fourthpart from '../Fourthpart'
import Reviewspage from '../Reviewspage'
import Fequentlyasked from '../Fequentlyasked'
import Expertadvice from '../Expertadvice'
import Mostviewed from '../Mostviewed'
import Mission from '../Mission'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className="content-area">
        <Firstpage />
        <Secondpart />
        <Fourthpart />
        <Reviewspage />
        <Fequentlyasked />
        <Expertadvice />
        <Mostviewed />
        <Mission />
        <Footer />

    </div>
  )
}

export default Home