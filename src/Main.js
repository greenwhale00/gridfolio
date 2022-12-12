import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='Main'>

            <div className="inner">

                <ul className="whole">

                    <li className='one name'><Link to="/about"><div className="frdes">Hey,</div></Link></li>
                    <li className='two name'><Link to="/resume"><div className="frdes">resume</div></Link></li>
                    <li className='three name'><Link to="/"><div className="frdes">zegna</div></Link></li>
                    <li className='four name'><Link to="/"><div className="frdes">kinfolk</div></Link></li>
                    <li className='five name'><Link to="/"><div className="frdes">balumuda</div></Link></li>
                    <li className='six name'><Link to="/"><div className="frdes">모름</div></Link></li>
                    <li className='seven name'><Link to="/"><div className="frdes">get in touch</div></Link></li>
                    <li className='eight name'><Link to="/"><div className="frdes">what i do</div></Link></li>

                </ul>
            </div>
        </section >
    )
}

export default Main