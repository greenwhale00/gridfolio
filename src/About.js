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
                            1. 디지털 기술을 기반으로 다양한 기기의 융합, 네트워크의 융합, 콘텐츠의 융합을 통해 새로운 형태의 제품이나 융합 서비스를 창출하기 위하여 기기, 네트워크, 콘텐츠의 기획, 설계, 제작, 운용 및 시험을 수행하는 기능, 기술에 관한 능력을 함양 할 수 있다.
                            2. 컴퓨터 프로그래밍 언어로 각 업무에 맞는 소프트웨어의 기능에 관한 설계, 구현 및 테스트를 수행하고, 형상관리를 통해 제품의 성능을 향상시키고, 서비스를 개선하는 업무능력을 함양할 수 있다.
                            3. 현대적 웹 애플리케이션을 개발하기 위한 표준 자바스크립트(ECMAScript), Ajax 등을 활용하여 모던 웹 개발 능력을 함양할 수 있다.
                            4. 리엑트(React)를 활용하여 싱글 페이지 애플리케이션 및 모바일 애플리케이션 개발 능력을 함양할 수 있다.
                            5. 관계형데이터베이스에서 SQL을 사용하여 응용SW의 기능에 적합한 데이터를 정의하고, 조작하며, 제어하는 능력을 함양 할 수 있다.

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