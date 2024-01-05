import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../utils/constants'

// let times = 1

const Header = () => {
const [login, setLogin] = useState('Login')
// console.log('Header rendered for ', times++, ' times ')
// useEffect(() => {
//   console.log('Use effect callled...')
// })


  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='App-Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
          ;
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          ;<li>Cart</li>;
          <button
            className='login-btn'
            onClick={() => {
              if (login == 'Login') setLogin('Logout')
              else setLogin('Login')
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
