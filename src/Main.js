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
                            <img src={process.env.PUBLIC_URL + "/assets/face.png"} alt="" />
                            <h2>Hi.  I’m Hye-lim.<FiArrowRightCircle /></h2> <p></p>
                            <span>A frontend develper</span>

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

                    <div className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/hyundai.png"} alt="" />
                        <ul>
                            <li><a href="">react</a></li>
                            <li><a href="">javascript</a></li>
                            <li><a href="">jquery</a></li>
                        </ul>
                    </div>



                </div>




            </div>
        </section >
    )
}

export default Main