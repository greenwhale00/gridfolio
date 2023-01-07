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
                        <div>
                            <h2>Hi.  I’m<br />Hye-lim.</h2>
                            <p>dddd</p>
                        </div>

                    </li>

                    <li className='three name'>
                        <ul>
                            <li>About me</li>
                            <li>Hello! My name is Kim Hye-lim. </li>
                        </ul>

                    </li>

                    <li className='four name'>
                        <div>
                            <ul>
                                <li>Education</li>
                                <li>2008.03~2013.08 부산대학교 무역학과</li>
                            </ul>

                            <ul>
                                <li>Experience</li>
                                <li>
                                    2022.05~2022.11
                                    [디지털컨버전스] 리엑트(React)활용 프론트엔드 개발자 양성과정
                                </li>
                            </ul>
                        </div>


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