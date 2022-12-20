import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='Main'>

            <div className="inner">

                <div className="whole">

                    <Link to="/about" className='one name'><div className="frdes">Hey,</div></Link>
                    <Link to="/resume" className='two name'><div className="frdes">resume</div></Link>
                    <Link to="/" className='three name'><div className="frdes">zegna</div></Link>
                    <Link to="/" className='four name'><div className="frdes">kinfolk</div></Link>
                    <Link to="/" className='five name'><div className="frdes">balumuda</div></Link>
                    <Link to="/" className='six name'><div className="frdes">모름</div></Link>
                    <Link to="/" className='seven name'><div className="frdes">get in touch</div></Link>
                    <Link to="/" className='eight name'><div className="frdes">what i do</div></Link>

                </div>
            </div>
        </section >
    )
}

export default Main