import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import title from './title-logo.svg';
import Link from '@material-ui/core/Link';
import mail from './mail.svg';
import home from './homeIcon.svg';
import media from './shuffle.svg'
import About from './About';
import Welcome from './Welcome';
import Services from './Services';

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
    flexGrow: 1,
    color: '#1F2E35CC',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('md')]:{
    // display : 'block',
    flexGrow: 1,
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-evenly',
    },
    [theme.breakpoints.down('md')]:{
      display : 'none'
    }
  },
  titleLogo: {
    [theme.breakpoints.up('md')]:{
    marginLeft: theme.spacing(10),
    height: '80%',
    width : 'auto'
    },
    [theme.breakpoints.down('md')]:{
      marginRight : theme.spacing(4),
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
  classOne: {
    [theme.breakpoints.up('md')]:{
      display : 'block',
      marginRight: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]:{
      display : 'none'
    }
  }
}));


function App() {
  const classes = useStyles();
  document.title = "Dwidasa Samsara Indonesia (DSI)"
  return (
    <ThemeProvider theme={theme}>
      <nav className={classes.root}>
        <AppBar position="static" color='secondary' className={classes.appbar}>
          <Toolbar>
            <img src={title} alt='title dsi' className={classes.titleLogo}></img>
            <Typography className={classes.title}>
              <Link href='#'>Services</Link>
              <Link href='#'>Product</Link>
              <Link href='#'>Technology</Link>
              <select className={classes.select}>
                <option>About</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
              </select>
              <select className={classes.select}>
                <option>Client</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
              </select>
              <Link href='#'>Partner</Link>
            </Typography>
            <div className={classes.classOne}>
              <Link href='#'><img src={home} alt='icon home' className={classes.logo}></img></Link>
              <Link href='#'><img src={mail} alt='icon mail' className={classes.logo}></img></Link>
              <Link href='#'><img src={media} alt='icon media/ shuffle' className={classes.logo}></img></Link>
            </div>
          </Toolbar>
        </AppBar>
      
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
