import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import title from './title-logo.svg';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import menuIcon from './text_align_right.svg'
import mail from './mail.svg';
import home from './homeIcon.svg';
import media from './shuffle.svg'
import About from './About';
import Welcome from './Welcome';
import Services from './Services';

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
  // root
  root: {
    flexGrow: 1,
    color: '#1F2E35CC',
  },
  // Links in desktop menu
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  // title logo
  titleLogo: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(10),
      height: '80%',
      width: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(4),
    }
  },
  appbar: {
    display: 'block',
    padding: theme.spacing(2)
  },
  select: {
    borderStyle: 'none',
    outlineStyle: 'none',
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  // 
  classOne: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginRight: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  altMenu: {
    [theme.breakpoints.down('md')]: {
      display: 'block',
      float: 'right',
      flexGrow: 1,
      height: '100%',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
      width: 'fit-content'
    }
  }
}));


function App() {
  const classes = useStyles();
  document.title = "Dwidasa Samsara Indonesia (DSI)";
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (event) => {
    setExpanded(!expanded);
    console.log('clicked', expanded)
  };
  return (
    <ThemeProvider theme={theme}>
      <nav className={classes.root}>
        <AppBar position="static" color='secondary' className={classes.appbar}>
          <Toolbar>
            <img src={title} alt='title dsi' className={classes.titleLogo}></img>
            <Typography className={classes.title} component={'span'}>
              <Link underline='none' href='#' className='links'>Services</Link>
              <Link href='#' className='links' underline='none'>Product</Link>
              <Link href='#' className='links' underline='none'>Technology</Link>
              <div className="dropdown">
                <Typography className="dropbtn" component={'span'}>About <ExpandMoreIcon className='icons'/></Typography>
                <div className="dropdown-content">
                  <Link href="#" className='dropdown-links' underline='none'>Link 1</Link>
                  <Link href="#" className='dropdown-links' underline='none'>Link 2</Link>
                  <Link href="#" className='dropdown-links' underline='none'>Link 3</Link>
                </div>
              </div>
              <div className="dropdown">
                <Typography className="dropbtn" component={'span'}>Clients<ExpandMoreIcon className='icons'/></Typography>
                <div className="dropdown-content">
                  <Link href="#" className='dropdown-links' underline='none'>Link 4</Link>
                  <Link href="#" className='dropdown-links' underline='none'>Link 5</Link>
                  <Link href="#" className='dropdown-links' underline='none'>Link 6</Link>
                </div>
              </div>
              <Link href='#' className='links' underline='none'>Partner</Link>
            </Typography>
            <div className={classes.classOne}>
              <Link href='#'><img src={home} alt='icon home' className={classes.logo}></img></Link>
              <Link href='#'><img src={mail} alt='icon mail' className={classes.logo}></img></Link>
              <Link href='#'><img src={media} alt='icon media/ shuffle' className={classes.logo}></img></Link>
            </div>
            <Button className={classes.altMenu} onClick={(e) => { handleChange(e) }}>
              <img src={menuIcon} alt='menu icon' ></img>
            </Button>
          </Toolbar>
        </AppBar>
        <div style={expanded ? { display: "block" } : { display: "none" }}>
          <p>Yo!</p>
        </div>
      </nav>

      <main>
        <About />
        <Welcome />
        <Services />
      </main>
    </ThemeProvider>
  );
}

export default App;
