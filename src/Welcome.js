import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import product from './pana2.svg';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6952DC',
        },
        secondary: {
            main: '#fff',
        },

    },
});


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#F6F6F6',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
            // marginTop: theme.spacing(4),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(4),
        },

    },
    spanClass: {
        color: '#6952DC',
        fontWeight : 600,
    },
    textOne: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(2),
        }
    },
    heading: {
        [theme.breakpoints.up('md')]: {
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '43px'
        },
        [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '45px'
        }
    },
    box: {
        width: '100%',
    },
    image: {
        display: 'block',
        float: 'right',

        [theme.breakpoints.up('lg')]: { height: '350px', marginRight: theme.spacing(8), marginTop: -theme.spacing(5), },
        [theme.breakpoints.down('md')]: { height: '260px' }
    },
    grid: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'spce-between',
            marginTop: theme.spacing(6),
            // width: 'fit-content',
            justifySelf: 'center',
        },
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: theme.spacing(6),
            alignItems: 'center',
            // textAlign: 'center'
        },

    },
    text: {
        fontSize: '18px',
        lineHeight: '24px',
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(2),
        }
    },
    button: {
        padding: theme.spacing(1.5),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(1),
    }
}))

export default function Welcome() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container
                    spacing={0}
                    alignContent='center'
                    className={classes.grid}
                ><Grid item xs={12} sm={12} md={6}>
                        <div className={classes.box}>
                            <img src={product} alt='desc' className={classes.image}></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.textOne} >
                        <Typography className={classes.heading}>
                            Welcome to <span className={classes.spanClass}> Dwidasa Samsara Indonesia (DSI)</span>
                        </Typography>
                        <br />
                        <Typography variant='body1' className={classes.text}>
                            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className={classes.spanClass}>DSI</span>’s distinct front-end based application concept.
                        </Typography>
                        <Typography variant='body1' className={classes.text}>
                            Managed by a team of professional experts with extensive experience and impressive track records, <span className={classes.spanClass}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                        </Typography>

                    </Grid>

                </Grid>

            </div>
        </ThemeProvider>
    )
}