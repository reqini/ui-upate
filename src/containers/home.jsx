import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { HotelsCardResume } from '../stories/Cards/Hotels/HotelsCardResume/HotelsCardResume';
import { Gallery } from '../stories/Gallery/Gallery';
import { PriceNav } from '../stories/Navs/PriceNav';

const Home = () => {
  return (
  <Container maxWidth="lg">
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Gallery />
        </Grid>
        <Grid item xs={12}>
            <PriceNav scroll={false} />
        </Grid>
        <Grid item xs={12} sm={4}>
            <HotelsCardResume />
        </Grid>
        <Grid item xs={12} sm={4}>
            <HotelsCardResume />
        </Grid>
        <Grid item xs={12} sm={4}>
            <HotelsCardResume />
        </Grid>
    </Grid>
  </Container>
  )
};
export default Home;