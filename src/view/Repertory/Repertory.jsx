import React, { useContext } from 'react'
import DataContext from '../../context/context'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import MovieTile from './MovieTile'

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    [breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    margin: 10
  }
}
)
)


const Repertory = () => {
  const { movies } = useContext(DataContext)
  const classes = useStyles()

  return (
    <>
      <Typography gutterBottom variant="h3" component="h2" align='center'>
        Repertuar
      </Typography>
      <Grid container className={classes.container}>
        {movies.map((movie) => (
          <Grid
            item
            key={movie.id}
            className={classes.item}
          >
            <MovieTile
              movie={movie}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Repertory