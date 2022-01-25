import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/PersonOutline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Image from '../assets/images/whitecappic.jpg'

const styles = theme => ({
  appBar: {
    position: 'sticky',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Image})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    Opacity:5,
    Radius: "50%"
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    alignItems:"center",
    justify:"center"
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  project: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 0,
    paddingTop: '40%'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const projects = [
  {
    title:"CookiT",
    image:"http://cookit-2018.herokuapp.com/static/media/Logo.003092cb.png",
    githubLink:"https://github.com/DeclanMorrison/Cookit",
    liveLink:"http://cookit-2018.herokuapp.com/login",
    comments:` Hosted on Heroku, this app lets users search, favorite, and add recipes to a weekly calander which builds out a grocery list for the user.`
  },
  {
    title:"iRyde",
    image:"data:image/png;base64,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",
    githubLink:"https://github.com/Izaakmills/codeteam-6",
    liveLink:"",
    comments:"A price comparison tool between lyft and uber"
  },
  {
    title:"TappyHour",
    image:"https://tranquil-fjord-50136.herokuapp.com/images/logo.png",
    githubLink:"https://github.com/Izaakmills/project-2",
    liveLink:"https://tranquil-fjord-50136.herokuapp.com/",
    comments:`A full stack application complete with server side
    authorization that details local happy hours.`
  },
  {
    title:"Hangman",
    image:"https://image.freepik.com/free-icon/question-mark_318-52837.jpg",
    githubLink:"https://github.com/Izaakmills/hangman",
    liveLink:"https://izaakmills.github.io/hangman/",
    comments:`A word guessing game that challenges your intellect!`
  },
  {
    title:"Trivia Game",
    image:"https://upload.wikimedia.org/wikipedia/en/2/27/Trivia.png",
    githubLink:"https://github.com/Izaakmills/Trivia-Game",
    liveLink:"https://izaakmills.github.io/Trivia-Game/",
    comments:`A question game that makes you think...but only a little bit.`
  },
  {
    title:"Giphy App",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uofOgFFG8ss97XLvTm_3UlYicQyCfe6Gi8RiAj8WYgiey6n3qA",
    githubLink:"https://github.com/Izaakmills/Trivia-Game",
    liveLink:"https://izaakmills.github.io/Trivia-Game/",
    comments:` A giph website that returns to the user giphs from a user
    generated search term.`
  },

];

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <PersonIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Izaak Mills
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              <p></p>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <a href="https://github.com/Izaakmills"variant="contained" color="primary">
                    Github
                  </a>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {projects.map(project => (
              <Grid item key={project} sm={6} md={6} lg={6}>
                <Card className={classes.project} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.comments}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button size="small" color="primary">
                      Github
                    </Button>
                    <Button size="small" color="primary">
                      Live Look
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Get In Touch
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
           Email: IzaakMills07@gmail.com
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
