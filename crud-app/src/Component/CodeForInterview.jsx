import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h3">Mehul Verma's MERN CRUD Web Application ( 14 Nov '21)</Typography>
            <Box style={{display: 'flex'}}>
                <img src={Youtube} className={classes.image} />
                <img src={InstaTele} className={classes.image} />
            </Box>
        </Box>
    )
}

export default CodeForInterview;