import React from 'react'
import { Link } from 'react-router-dom';
import './css/about.scss'


const About = () => {
    return (
        <section className='About'>
            <div className="inner">

                <p className="first">
                    About Me
                </p>

                <ul className="whole">

                    <li className='one name'>

                    </li>

                    <li className='two name'>
                        <img src={process.env.PUBLIC_URL + "/assets/face.png"} className="face" alt="" />
                        <span>Hi.  I’m Hye-lim.</span>
                    </li>

                    <li className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                    </li>

                    <li className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                    </li>

                    {/* <Link to="/" className='five name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                    </Link>

                    <Link to="/" className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                    </Link>

                    <Link to="/" className='seven name'>
                        <div className="des">
                            <span>Learn about me</span>
                            <p>See my resume</p>
                        </div>
                    </Link> */}


                </ul>
            </div>
        </section>
    )
}

export default About