import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import panel from './pana.svg';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EE4248',
        },
        secondary: {
            main: '#fff',
        },

    },
});


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            padding: theme.spacing(8),
            marginTop: theme.spacing(10)
        },
        [theme.breakpoints.down('md')]:{
            marginTop: theme.spacing(10),
        }
    },
    spanClass: {
        color: '#EE4248',
    },
    textOne: {
        padding: theme.spacing(2),
    },
    heading: {
        [theme.breakpoints.up('md')]: {
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '48px'
        },
        [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '36px'
        }
    },
    box: {
        width: '100%',
    },
    image: {
        display: 'block',
        [theme.breakpoints.up('lg')]: { height: '380px' },
        [theme.breakpoints.down('md')]: { height: '205px' }
    },
    grid: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'spce-between',
            justifySelf: 'center',
        },
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },

    },
    text: {
        fontSize: '18px',
        lineHeight: '27px',
    },
    button: {
        padding: theme.spacing(1.5),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(1),
    }
}))

export default function About() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container
                    spacing={0}
                    className={classes.grid}
                >
                    <Grid item xs={12} sm={12} md={6} className={classes.textOne}>
                        <Typography className={classes.heading}>
                            Making the most of the ever-growing <br /><span className={classes.spanClass}> Information Technology</span>
                        </Typography>
                        <Typography variant='body1' className={classes.text}>
                            Managed by a team of professional experts with extensive experience and impressive track records
                        </Typography>
                        <Button variant='contained' color='primary' className={classes.button}>
                            Read More
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={classes.box}>
                            <img src={panel} alt='desc' className={classes.image}></img>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </ThemeProvider>
    )
}