import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

function Header() {
    return (
        <header className='Header'>


            <div className="top_header">
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
                        +9<a href="">get in touch</a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header