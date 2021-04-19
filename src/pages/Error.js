import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root:{
        backgroundColor: '#fcfcfc',
        width: '100vw',
        textAlign: 'center',
        padding: '8em 0',

        '@media(max-width: 600px)':
        {
            padding: '8em 0', 
        },
    },
    header:{
        color: '#313030',
        fontFamily: 'Lexend-Bold',
    },
    subHeader:{
        color: '#756D6D',
        fontFamily: 'mont-Regular',
    },
    btnDiv:{
        marginTop: '3em',
    },
    btnRedirect:{
        fontFamily: 'Lexend-SemiBold',
        color: '#FFFFFF',
        BackgroundColor: '#5b6467',
        backgroundImage: 'linear-gradient(315deg, #5b6467 0%, #8b939a 74%)',
        borderRadius: '.5em',
        padding: '1em 3em',

        '&:hover':{
            transform: 'scale(1.15)',
            transition: '0.5s ease all',
        }
    },

});

export default function Error() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h1' className={classes.header}>
                404 
            </Typography>
            <Typography variant='h5' className={classes.subHeader} gutterBottom>
                Page not available
            </Typography>

            <div className={classes.btnDiv}>
                <Button variant='contained' className={classes.btnRedirect} href='/' >
                    Go to homepage
                </Button>
            </div>
        </div>
    )
}
