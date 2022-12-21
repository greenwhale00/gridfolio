import React from 'react'
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <section className='Works'>

            <div className="inner">
                All Works
            </div>

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

                    <Link to="/" className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                        <div className="frdes"></div>
                    </Link>

                    <Link to="/" className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                        <div className="frdes"></div>
                    </Link>

                    <Link to="/" className='five name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                        <div className="frdes"></div>
                    </Link>

                    <Link to="/" className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                        <div className="frdes"></div>
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

export default Works