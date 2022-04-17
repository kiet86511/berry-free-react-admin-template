import { Typography } from '@mui/material';
import React from 'react';

import Img1 from '../../../img/banner-1.jpg';
import Img2 from '../../../img/banner-2.jpg';
import Img3 from '../../../img/banner-3.jpg';

const Dashboard = () => (
    <div>
        <Typography variant="h2" textAlign="center">
            SEARCH AND RENT BOARDING HOUSE WEBSITE
        </Typography>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Img1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Img2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Img3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);

export default Dashboard;
