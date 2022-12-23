import React from 'react'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section className='About'>
            <div className="inner">

                <p className="first">
                    About Me
                </p>

                <div className="whole">

                    <Link to="https://greenwhale00.github.io/react_zegna/" className='one name'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                    </Link>

                    <Link to="/resume" className='two name'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                    </Link>

                    <Link to="/" className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                    </Link>

                    <Link to="/" className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                    </Link>

                    <Link to="/" className='five name'>
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
                    </Link>


                </div>
            </div>
        </section>
    )
}

export default About