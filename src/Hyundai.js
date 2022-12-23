import React from 'react'
import './css/hyundai.scss'

const Hyundai = () => {
    return (
        <section className='Hyundai'>
            <div className="inner">
                <p>OMG</p>
                <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
            </div>
        </section>
    )
}

export default Hyundai