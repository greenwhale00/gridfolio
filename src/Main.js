import React from 'react'
import { Link } from 'react-router-dom';
import Hyundai from './Hyundai';
import { Route, Routes } from 'react-router-dom';
const Main = () => {
    return (
        <section className='Main'>

            <div className="inner">

                <div className="whole">

                    <Link to="/about" className='one name'>
                        <div className="frdes title">
                            <img src={process.env.PUBLIC_URL + "/assets/face.png"} className="face" alt="" />
                            <span>Hi.  I’m Hye-lim.</span>
                        </div>
                    </Link>

                    <Link to="/resume" className='two name'>
                        <div className="des">
                            <span>Learn about me</span>
                            <p>See my resume</p>
                        </div>

                    </Link>

                    <a href="https://greenwhale00.github.io/react_zegna/" target="_blank" className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                        <div className="frdes"></div>
                    </a>

                    <a href="https://greenwhale00.github.io/kinfolk/" target="_blank" className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                        <div className="frdes"></div>
                    </a>

                    <a href="https://greenwhale00.github.io/balmuda/" target="_blank" className='five name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                        <div className="frdes"></div>
                    </a>

                    <Link to="/hyundai" className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                        <div className="frdes">현대</div>
                    </Link>

                    <Link to="/" className='seven name'>
                        <div className="frdes">get in touch</div>
                    </Link>

                    <Link to="/" className='eight name'>
                        <div className="frdes">what i do</div>
                    </Link>

                </div>
            </div>
        </section >
    )
}

export default Main