import React from 'react';
import 'swiper/swiper-bundle.css'

import './Featured.css'

function Featured() {

    return (
        <div className="featured">
            <h3>Featured</h3>
            <ul className="featured-brand">
                <li className="brand">
                    <div className="nike">
                        <a href="learnmore.html">
                            <img className="brand-image" src="/ImageData/nike.jpg" alt=""></img>
                        </a>
                    </div>
                </li>
                <li className="brand">
                    <div className="adidas">
                        <img className="brand-image" src="ImageData/adidas1.jpg" alt=""></img>
                    </div>
                </li>
                <li className="brand ">
                    <div className="bitis">
                        <img className="brand-image" src="ImageData/bitis.jpg" alt=""></img>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Featured
