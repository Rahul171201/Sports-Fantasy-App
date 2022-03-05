import React from 'react';
import './matchscreen.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import CardCarousel from "./Carousel/index";
import { CarouselContainer } from "./styles.js";


export default function matchscreen() {
    return (
        <div className='box'>
            <div className='newsbox'>
                <CarouselContainer>
                    <h1> Carousel </h1>

                    <CardCarousel />
                </CarouselContainer>
            </div>
            <div className='matchbox'>
                noice
            </div>
        </div>
    )
}
