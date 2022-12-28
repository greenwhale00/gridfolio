import React from 'react'

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
                        <h2>Hi.  I’m Hye-lim.</h2>
                    </li>

                    <li className='three name'>
                        <h3>About me</h3>
                        <p>Hello! My name is Kim Hye-lim. </p>
                    </li>

                    <li className='four name'>
                        <h3>Education & Experience</h3>
                        <p>
                            [디지털컨버전스] 리엑트(React)활용 프론트엔드 개발자 양성과정

                        </p>
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