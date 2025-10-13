
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
            <div className='f-subgroup'>
              <div className='f-groups'>
                <div>
                  <h4>Services</h4>
                  <Link to='/providers'>Providers</Link><br/>
                  <Link to ='/guides'>Guides</Link><br/>
                  <Link to='/memorials'>Memorials</Link><br/>
                  <Link to= '/contact'>Join as a Provider</Link>
                </div>

                <div>
                  <h4>Resources</h4>
                  <Link>Support Library</Link><br/>
                  <Link>Glossary</Link><br/>
                  <Link>Funerals</Link><br/>
                  <Link>Estates</Link><br/>
                  <Link>Grief</Link><br/>
                </div>

                <div>
                  <h4>About</h4>
                  <Link to='/about'>About Autumn</Link><br/>
                  <Link to='/contact'>Contact us</Link><br/>
                  <Link>FAQ</Link><br/>
                  <Link>Privacy</Link><br/>
                  <Link>Terms</Link><br/>
                </div>
              </div>

            </div>
           
        </div>


    </div>
  )
}

export default Footer