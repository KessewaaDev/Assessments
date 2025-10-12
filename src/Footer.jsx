
import './App.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-subcontain'>
            <div className='f-group'>
                <Link to='/'>
                <img src='autumn.svg' />
                </Link>
                <p>Sign up to learn more</p>
                <input type='email' placeholder='Enter your email'/>

            </div>
           
        </div>


    </div>
  )
}

export default Footer