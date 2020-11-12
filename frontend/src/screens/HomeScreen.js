import React from 'react'
import { Link } from 'react-scroll';
import Featured from '../components/homescreen/Featured'
import '../components/homescreen/Featured.css'
import Trending from '../components/homescreen/Trending';

function HomeScreen() {

    return <div>
        <div className='hero-container'>
            <video className="video-homepage" src="/Videos/introjordan.mp4" autoPlay loop muted />
            <div className="hero-title-homepage">
                <h1 className="title1">ADVENTURE AWAITS</h1>
                <p className="title2">What are you waiting for?</p>
                <div className="hero-btns">
                    <Link to="trending" smooth={true} duration={1000}>
                        <button className="btn btn--outline btn--large">
                            GET STARTED
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <hr />
        <div className="show-product" >
            <div>
                <Featured />
            </div>
            <hr />
            <section id="trending">
                <Trending />
            </section>


        </div>

    </div>
}

export default HomeScreen
