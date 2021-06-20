import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import title from './title-logo.svg';
import one from './productServices.svg';
import two from './verified1.svg';
import three from './cogwheel1.svg';
import image from './1313.svg'

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
            padding: theme.spacing(10),
            margin: theme.spacing(12)
        },
        [theme.breakpoints.down('md')]: {
            flexGrow: 1,
            padding: theme.spacing(2),
            margin: theme.spacing(2)
        }
    },
    spanClass: {
        fontWeight: '700',
    },
    textOne: {
        padding: theme.spacing(2),
    },
    grid: {
        paddingTop: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'spce-between',
            // justifySelf: 'center',
        },
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },

    },
    button: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
            // marginTop: theme.spacing(1),
        },

    },
    appbar: {
        color: '#fff',
        flexGrow : 1,
        width: '100%',
    },
    title: {
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '18px',
            lineHeight: '27px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            lineHeight: '21px',
            flexGrow: 1,
            textAlign: 'center',
        }
    },
    titleText: {
        fontWeight: 700,
        textAlign : 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
            lineHeight: '43px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
            lineHeight: '43px'
        }
    },
    contact: {
        fontSize: '24px',
        lineHeight: '28px',
        marginBottom: theme.spacing(2),
        fontWeight : 600,
    },
    contactBody: {
        fontSize: '15px',
         lineHeight: '26px'
    },
    grid2 :{
        width : 'fit-content',
        [theme.breakpoints.up('md')]:{
            padding : theme.spacing(6),
            paddingTop : 0,
            alignItems : 'flex-end',
            justifyContent : 'center',
        },
        [theme.breakpoints.down('md')]:{
            display : 'flex',
            flexDirection : 'column',
            marginLeft : theme.spacing(3),
            marginBottom : theme.spacing(2),
        }
    },
    altImage : {
        [theme.breakpoints.up('md')]:{
            width : '420px'
        },
        [theme.breakpoints.down('md')]:{
            width : '250px',
        }
    }


}))

function Item(props) {
    const classes = useStyles();
    return (
        <div style={{ height: '100%' }}>
            <Grid container direction='column' spacing={4}>
                <Grid item>
                    <img src={props.img} alt='icon'></img>
                </Grid>
                <Grid item>
                    <Typography color='primary' style={{fontWeight : 600}}>
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.body}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='primary' className={classes.button}>Read More</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default function Services() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid>
                    <Typography className={classes.titleText}>
                        Products and Services
                    </Typography>
                </Grid>
                <Grid container
                    spacing={2}
                    className={classes.grid}>
                    <Grid item xs={12} sm={12} md={4} className={classes.textOne}>
                        <Item
                            img={one}
                            title="Our Product"
                            body="Our product is made on the base of our team’s careful research and analyses, ranging from internet based application."
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.textOne}>
                        <Item
                            img={two}
                            title="Our Service"
                            body="DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors."
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.textOne}>
                        <Item
                            img={three}
                            title="Our Technology"
                            body="First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."
                        />
                    </Grid>
                </Grid>
            </div>
            <Grid container className={classes.grid2} spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <Grid container direction='column'>
                        <Grid item>
                            <img src={title} alt='logo'></img>
                        </Grid>
                        <Grid item>
                            <Typography>
                                PT Dwidasa Samsara Indonesia
                            </Typography>
                            <Typography>
                                Ruko Jalur Sutera 29A No. 53<br />
                                Alam Sutera Serpong, Tangerang 15323
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Typography className={classes.contact}>
                                Contact
                            </Typography>
                            <Typography className={classes.contactBody}>
                                Phone : +62.21.5314.1135<br />
                                Fax : +62.21.5314.1135<br />
                                Email : community@dwidasa.com                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img src={image} alt='partner logos' className={classes.altImage}></img>
                </Grid>
            </Grid>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.title}>
                        Copyright © 2015 - <span className={classes.spanClass}>Dwidasa Samsara Indonesia</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}