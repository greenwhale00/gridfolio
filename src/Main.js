import React from 'react'
import { Link } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import { FiArrowRightCircle } from "react-icons/fi";


const Main = () => {
    return (
        <section className='Main'>

            <div className="inner">

                <div className="whole">

                    <Link to="/about" className='one name'>
                        <div className="frdes title">
                            <img src={process.env.PUBLIC_URL + "/assets/face.png"} className="face" alt="" />
                            <span>Hi.  I’m Hye-lim.</span><span><FiArrowRightCircle /></span>
                        </div>
                    </Link>

                    <Link to="/resume" className='two name'>
                        <div className="des">
                            <span>Learn about me</span><span>💌</span>
                            <p>See my resume</p>
                        </div>
                    </Link>

                    <a href="https://greenwhale00.github.io/react_zegna/" target="_blank" className='three name back'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                        <ul className='back_des'>
                            <li>zegna</li>
                            <li><FiArrowRightCircle /></li>

                        </ul>
                    </a>

                    <a href="https://greenwhale00.github.io/kinfolk/" target="_blank" className='four name back'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                        <ul className="back_des">
                            <li>kinfolk</li>
                            <li><FiArrowRightCircle /></li>
                        </ul>
                    </a>

                    <a href="https://greenwhale00.github.io/balmuda/" target="_blank" className='five name back'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                        <ul className="back_des">
                            <li>balmuda</li>
                            <li><FiArrowRightCircle /></li>
                        </ul>
                    </a>

                    <Link to="/hyundai" className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/hyundai.png"} alt="" />
                        <ul>
                            <li>react</li>
                            <li>javascript</li>
                            <li>jquery</li>
                        </ul>
                    </Link>



                </div>
            </div>
        </section >
    )
}

export default Main