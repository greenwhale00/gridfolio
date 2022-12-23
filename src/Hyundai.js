import React from 'react'
import 'Hyndai.scss'

const Hyundai = () => {
    return (
        <section className='Hyundai'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + "/assets/balmuda.jpg"} alt="" />
            </div>
        </section>
    )
}

export default Hyundai