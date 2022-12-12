import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='Main'>
            <div className="inner">
                <div className="whole">

                    <div class="one name">
                        <Link to="/about">
                            <img src={process.env.PUBLIC_URL + "/assets/images/one.jpg"} alt="" />
                            <div className="frdes">
                                <p>Hey, I'm Hye-lim</p>
                            </div>
                        </Link>
                    </div>

                    <div class="two name">
                        <Link to="/resume">
                            <img src={process.env.PUBLIC_URL + "/assets/images/two.jpg"} alt="" />
                            <div className="frdes">
                                <p>see my resume</p>
                            </div>
                        </Link>
                    </div>

                    <div class="three name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/three.jpg"} alt="" />
                            <div className="frdes">
                                <p>kinfolk</p>
                            </div>
                        </a>
                    </div>

                    <div class="four name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/four.jpg"} alt="" />
                            <div className="frdes">
                                <p>Zegna</p>
                            </div>
                        </a>
                    </div>
                    <div class="five name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/five.jpg"} alt="" />
                            <div className="frdes">
                                <p>balmuda</p>
                            </div>
                        </a>
                    </div>
                    <div class="six name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/six.jpg"} alt="" />
                            <div className="frdes">
                                <p>하나 더</p>
                            </div>
                        </a>
                    </div>
                    <div class="seven name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/six.jpg"} alt="" />
                            <div className="frdes">
                                <p>Get in touch now</p>
                            </div>
                        </a>
                    </div>
                    <div class="eight name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/six.jpg"} alt="" />
                            <div className="frdes">
                                <p>what i do</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Main