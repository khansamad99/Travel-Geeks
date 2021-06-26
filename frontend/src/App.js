import React ,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import useStyle from './style'
import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyle()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar/>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
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
