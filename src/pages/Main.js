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
    gridItem:{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redBackground:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-2',
    },
    whiteBackground:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-2',
    },  
    TextDiv:{
        zIndex: '1',
        padding: '15em 0',
        textAlign: 'center',

        '@media(max-width: 600px)':{
            padding: '0',
        },
    },
    headerWhite:{
        fontFamily: 'Lexend-SemiBold',
        color: '#FFFFFF',
    },
    headerBlack:{
        fontFamily: 'Lexend-SemiBold',
        color: '#000000',
    },
    btnRedirect:{
        padding: '1em 4em',
        borderRadius: '25px',
        fontFamily: 'Lexend-SemiBold',
        marginTop: '1em',
        
        '&:hover':{
            transform: 'scale(1.15)',
            transition: '0.5s ease all',
        },
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
                    className={classes.gridItem}
                    xs={12} sm={6} md={6}
                >
                    <img src={RedBackground} className={classes.redBackground} alt='red Background' />

                    <div className={classes.TextDiv}>
                        <Typography variant='h4' className={classes.headerWhite} gutterBottom>
                            New Student Portal
                        </Typography>
                        <Button variant='contained' className={classes.btnRedirect} href='/newportal' >
                            Access
                        </Button>
                    </div>

                </Grid>
                <Grid
                    item
                    className={classes.gridItem}
                    xs={12} sm={6} md={6}
                >
                    <img src={WhiteBackground} className={classes.whiteBackground} alt='white Background' />

                    <div className={classes.TextDiv}>
                        <Typography variant='h4' className={classes.headerBlack} gutterBottom>
                            New Student Portal
                        </Typography>
                        <Button variant='contained' className={classes.btnRedirect} href='/oldportal' >
                            Access
                        </Button>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}
