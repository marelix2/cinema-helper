import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    [breakpoints.down('sm')]: {
      fontSize: '1.75em'
    }
  },
  header2: {
    [breakpoints.down('sm')]: {
      fontSize: '1.25em'
    },
    textAlign: 'center',
    marginBottom: 8
  }
}))

const Welcome = () => {

  const classes = useStyles()

  return (
    <Grid container direction='column' alignItems='center' justify='center'  >
      <Grid item>
        <Typography className={classes.header} variant='h1'>
          Systemy mobilne
       </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.header2} variant='h2'>
          Grupa: 2ID22A
       </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.header2} variant='h2'>
          Michał Rusinek
       </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.header2} variant='h2'>
          Projekt aplikacji mobilnej 
          wspierające obsługę kina.
       </Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;