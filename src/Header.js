import React from 'react'
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import NavMenu from './NavMenu';


function Header() {
    return (
        <header className='Header'>

            <div className="inner">
                <h1>
                    <Link to='/'>
                        <a href="/">portfolio</a>
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
                <div className='icon'>
                    <a href="/">github</a>
                </div>
            </div>


        </header>
    )
}

export default Header