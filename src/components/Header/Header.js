import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header className="header">
      <h1><Link to="/">Home</Link></h1>
      <nav>
        <ul>
          <li><Link to="/page-one">Page 1</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
