import { AppBar, Container, Toolbar, IconButton, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

//import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0, 0.3)",
  },
  cardMedia: {
    paddingTop: "55%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              MaterialUI Web Site
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    MATERIAL-UI
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    React components for faster and easier web development. Build your own design system, or start with Material Design.
                  </Typography>
                  <Button variant="contained" color="primary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Get started with Material-UI in no time.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css. You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Get started
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Instalation
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Card item" />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                          Create React App
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          It's an awesome project for learning React. Have a look at the alternatives available to see which project best fits your needs.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <LayerIcon />
                        <PlayCircleFilledIcon />
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
