import React, { useState, useEffect, Component } from 'react';
import './matchscreen.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import moment from 'moment';

export default function Matchscreen() {


    let currentDate = moment();
    let future = moment('2022-03-12 14:00:00');
    let timeLeft = moment(future.diff(currentDate)).subtract("05:30:00", "hh:mm:ss").format("HH:mm:ss");
    // console.log(timeLeft);

    const [remainingTime, setRemainingTime] = useState(0);

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            setRemainingTime(timeLeft);
        }, 1000);
    
        return () => window.clearInterval(timer);
    });
    console.log(remainingTime);


    return (
        <div className='box'>
            <div className='newsbox'>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div className="slideimage">
                        <img src="/slideimage1.png" alt="img1" />
                    </div>
                    <div className="slideimage">
                        <img src="/slideimage2.jpg" alt="img2" />
                    </div>
                    <div className="slideimage">
                        <img src="/slideimage3.png" alt="img3" />
                    </div>
                    <div className="slideimage">
                        <img src="/slideimage4.jpg" alt="img4" />
                    </div>
                </Carousel>
            </div>
            <div className='matchbox'>
                <div className='match'>
                    <div className='topbar'>
                        <div className='lefttopbar'>
                            <p className='contestname'>PayTM Test Trophy</p>
                        </div>
                        <div className='righttopbar'>
                            <p className='lineups'>Lineups Out + </p>
                            <NotificationsActiveIcon className='notificationicon1' fontSize='small'></NotificationsActiveIcon>
                        </div>
                    </div>
                    <div className='middlebar'>
                        <div className='team1'>
                            <img className='imageteam1' src="/india.png" alt="team1"></img>
                            <p className='teamname'>India</p>
                        </div>
                        <div className='midportion'>
                            <div className='VS'>VS</div>
                            <div className='time'>{timeLeft}</div>
                        </div>

                        <div className='team2'>
                            <img className='imageteam2' src="/srilanka.webp" alt="team2"></img>
                            <p className='teamname'>Srilanka</p>
                        </div>
                    </div>
                    <div className='bottombar'>

                    </div>
                </div>

                <div className='match'>
                    <div className='topbar'>
                        <div className='lefttopbar'>
                            <p className='contestname'>PayTM Test Trophy</p>
                        </div>
                        <div className='righttopbar'>
                            <p className='lineups'>Lineups Out + </p>
                            <NotificationsActiveIcon className='notificationicon1' fontSize='small'></NotificationsActiveIcon>
                        </div>
                    </div>
                    <div className='middlebar'>
                        <div className='team1'>
                            <img className='imageteam1' src="/austrailia.jpg" alt="team1"></img>
                            <p className='teamname'>Austrailia</p>
                        </div>
                        <div className='midportion'>
                            <div className='VS'>VS</div>
                            <div className='time'>{timeLeft}</div>
                        </div>

                        <div className='team2'>
                            <img className='imageteam2' src="/pakistan.jpg" alt="team2"></img>
                            <p className='teamname'>Pakistan</p>
                        </div>
                    </div>
                    <div className='bottombar'>

                    </div>
                </div>

            </div>
        </div>
    )
}
