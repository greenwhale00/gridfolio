import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const NAVLINK = [
    { content: "Home", link: "/" },
    { content: "Works", link: "/works" },
    { content: "About", link: "/about" },
    { content: "Resume", link: "/resume" },
]


const NavMenu = () => {
    return (
        <>
            <ul>
                {
                    NAVLINK.map((it, idx) => {
                        return (
                            <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NavMenu