import React from "react";
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

//import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
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
  card: {
    cursor: "pointer",
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
  footerTop: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  letUsKnowBtn: {
    marginLeft: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
              <Button onClick={handleClickOpen} color="inherit" variant="outlined">
                Log in
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-login">
                <DialogTitle id="form-dialog-login">Sign in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to read more</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Email" type="email" fullWidth />
                  <TextField margin="dense" id="pass" label="Password" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box>
              <Button onClick={handleClickOpen} color="secondary" variant="contained">
                Sign up
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-login">
                <DialogTitle id="form-dialog-login">Register</DialogTitle>
                <DialogContent>
                  <DialogContentText>Register to read more</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Nickname" type="name" fullWidth />
                  <TextField margin="dense" id="mail" label="Email" type="email" fullWidth />
                  <TextField margin="dense" id="pass" label="Password" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Sign up
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
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
      <footer gutterBottom>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <div className={classes.footerTop}>
          <Typography>Are you using Material-UI?</Typography>
          <Button className={classes.letUsKnowBtn} variant="contained" size="small" color="secondary">
            Let us know!
          </Button>
        </div>
      </footer>
    </>
  );
}

export default App;
