import styled from '@emotion/styled';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const MyNameText=styled(Typography)(({theme})=>({
  fontSize:'6rem',
  fontWeight:700,
}))

export const HomeSection = () => {
  return (
    <Container>
    <Grid container p={2}>
      <Grid item xs={4}>
            <Typography varient='h5'>Hello , </Typography>
            <MyNameText>I'm Preeti Sharma</MyNameText>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
    </Grid>
    </Container>
  )
}
