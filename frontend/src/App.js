import React ,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import useStyle from './style'
import { getPosts } from './actions/posts';

function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyle()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Adventure Space</Typography>
      </AppBar>
      <Box m={7}>
        <Typography variant="h4" align="center">Share your Adventure sports memory here!</Typography>
      </Box>
      <Grow in>
        <Container>
          <Grid container jutstify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
