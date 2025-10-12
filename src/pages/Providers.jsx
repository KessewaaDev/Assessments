import React from 'react'
import '../App.css'
import FirstProviderpage from '../FirstProviderpage'
import SecondProvider from '../SecondProvider'
import Footer from '../Footer'

const Providers = () => {
  return (
    <div className='main'>
        <FirstProviderpage />
        <SecondProvider />
        <Footer/>
    </div>
  )
}

export default Providers