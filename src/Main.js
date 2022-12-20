import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='Main'>

            <div className="inner">

                <div className="whole">

                    <Link to="/about" className='one name'>
                        <img src={process.env.PUBLIC_URL + "/assets/face.png"} alt="" />
                        <div className="frdes">
                            Hi.  I’m Hye-lim.
                        </div>
                    </Link>

                    <Link to="/resume" className='two name'>
                        <p className='frdes'>Learn about me</p>
                        <img src={process.env.PUBLIC_URL + "/assets/letter.png"} alt="" />
                        <div className="frdes">See my resume</div>
                    </Link>

                    <Link to="/" className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                        <div className="frdes">zegna</div>
                    </Link>

                    <Link to="/" className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                        <div className="frdes">kinfolk</div>
                    </Link>

                    <Link to="/" className='five name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                        <div className="frdes">balumuda</div>
                    </Link>

                    <Link to="/" className='six name'>
                        <img src={process.env.PUBLIC_URL + "/assets/idontknow.webp"} alt="" />
                        <div className="frdes">모름</div>
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