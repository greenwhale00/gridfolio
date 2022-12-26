import React from 'react'
import { Link } from 'react-router-dom';
import './css/works.scss'

const Works = () => {
    return (

        <section className='Works'>

            <div className="inner">

                <p className="first">All Works</p>

                <div className="whole">

                    <Link to="/about" className='one name'>
                        <img src={process.env.PUBLIC_URL + "/assets/zegna.webp"} alt="" />
                    </Link>

                    <Link to="/resume" className='two name'>
                        <img src={process.env.PUBLIC_URL + "/assets/kinfolk.jpg"} alt="" />
                    </Link>

                    <Link to="/" className='three name'>
                        <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
                    </Link>

                    <Link to="/" className='four name'>
                        <img src={process.env.PUBLIC_URL + "/assets/hyundai.png"} alt="" />
                    </Link>


                </div>

            </div>

        </section >
    )
}

export default Works