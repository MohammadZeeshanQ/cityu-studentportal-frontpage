import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// importing images from assest
import Background1 from '../../Assets/Images/Slider1.jpg';
import Background2 from '../../Assets/Images/Slider2.jpg';
import Background3 from '../../Assets/Images/Slider3.jpg';

const useStyles = makeStyles({
    root:{
        width:'100vw',
        height:'100vh',
    },
    wrapper:{
        position: 'relative',
    },
    sliderContainer:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '-2'
    },
    sliderContentDiv:{
    },
    sliderBackgroundImage:{
        width: '100%',
        height:'100%',
        objectFit: 'cover',
    },
    contentDiv:{
        textAlign: 'center',
        padding: '10em 0',
    }

});

export default function NewPortal() {

    const classes = useStyles();

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: false,
        swipe: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <Slider {...settings} className={classes.sliderContainer}>

                    <div className={classes.sliderContentDiv}>
                        <img className={classes.sliderBackgroundImage} src={Background1} alt='Background People'/>
                    </div>

                    <div className={classes.sliderContentDiv}>
                        <img className={classes.sliderBackgroundImage} src={Background2} alt='Background People'/>
                    </div>

                    <div className={classes.sliderContentDiv}>
                        <img className={classes.sliderBackgroundImage} src={Background3} alt='Background People'/>
                    </div>

                </Slider>

                <div className={classes.contentDiv} >

                    <Typography variant='h5' className={classes.contentText} gutterBottom>
                        Welcome to
                    </Typography>

                    <Typography variant='h2' className={classes.contentText} gutterBottom>
                        Student Portal
                    </Typography>
                    
                    <div className={classes.btnDiv} >
                        <Button variant='contained' className={classes.btnDirect} >Login Now</Button>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
