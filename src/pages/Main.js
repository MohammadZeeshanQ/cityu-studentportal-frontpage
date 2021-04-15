import React from 'react'
import {makeStyles, Grid, Button, Typography} from '@material-ui/core';
import RedBackground from '../Assets/Images/MainBackgroundRed.jpg';
import WhiteBackground from '../Assets/Images/MainBackgroundWhite.jpg';

const useStyles = makeStyles({
    root:{
        width: '100vw',
    },
    gridContainer:{
        width: '100%',
        height: '100vh',
    },
    redBackground:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    whiteBackground:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },  

});

export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid 
                container
                className={classes.gridContainer}
                xs={12} sm={12} md={12}
            >
                <Grid
                    item
                    xs={12} sm={6} md={6}
                >
                    <img src={RedBackground} className={classes.redBackground} alt='red Background' />

                </Grid>
                <Grid
                    item
                    xs={12} sm={6} md={6}
                >
                    <img src={WhiteBackground} className={classes.whiteBackground} alt='white Background' />

                </Grid>
            </Grid>
        </div>
    )
}
