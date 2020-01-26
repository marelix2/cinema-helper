import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"
import paths from '../../static/paths'

const useStyles = makeStyles({
  card: {
    maxWidth: 340,
  },
  link: {
    textDecoration: 'none',
  }
});

const MovieTile = ({ movie }) => {

  const classes = useStyles()

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={movie.img}
          height={180}
          image={require(`./../../static/images/${movie.img}`)}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Produkcja: {movie.production}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.type.join(' / ')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            czas trwania: {movie.timespan}
          </Typography>
        </CardContent>
      <CardActions>
        <Link
          to={paths.default}
          className={classes.link}>
          <Button size="small" variant='contained' color="primary">
            Sprawdź wolne miejsca
        </Button>
        </Link>
        <Link
          to={paths.default}
          className={classes.link}>
          <Button size="small" variant='contained' color="primary">
            Rezerwuj
      </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieTile;