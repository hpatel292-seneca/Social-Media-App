import React, {useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./Components/Posts/Post";
import Form from "./Components/Form/form"
import { getPosts } from './actions/posts'
// this is used to add styling to the material-ui component.
import useStyles from "./styles"
import {useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch])

  const MemoriesURL = "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
  return (
    // Container with maxWidth will act like an Fluid container
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position= "static" color= "inherit">
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={MemoriesURL} alt="memories" height="60" /> 
      </AppBar>
      {/* // Grow component need an "in" argumemt to make its child component visible */}
      <Grow in>
        <Container>
          {/* // Grid has this syntax type of thing that outer grid contain 'container' and child grid component
          // use 'item'. Grid is '14' column layout.  */}
          <Grid container justifyContent="space-between" alignItems='stretch'spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;