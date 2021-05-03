import React from 'react'
import {makeStyles} from '@material-ui/core';
import Slider from "react-slick";

const useStyles = makeStyles(()=> ({
    root:{

    },
    wrapper:{

    },

}));

export default function NewPortal() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
      };

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Slider {...settings}>

                </Slider>
            </div>
        </div>
    )
}
