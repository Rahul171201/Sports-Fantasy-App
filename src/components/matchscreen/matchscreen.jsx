import React from 'react';
import './matchscreen.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function matchscreen() {
    return (
        <div className='box'>
            <div className='newsbox'>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div className="slideimage">
                        <img  src="/slideimage1.png" alt="img1"/>
                    </div>
                    <div className="slideimage">
                        <img src="/slideimage2.jpg" alt="img2"/>
                    </div>
                    <div className="slideimage">
                        <img  src="/slideimage3.png" alt="img3"/>
                    </div>
                    <div className="slideimage">
                        <img src="/slideimage4.jpg" alt="img4"/>
                    </div>
                </Carousel>
            </div>
            <div className='matchbox'>
                <div className='match'>
                    
                </div>
                <div className='match'>
                    
                </div>
                <div className='match'>
                    
                </div>
                <div className='match'>
                    
                </div>
            </div>
        </div>
    )
}
