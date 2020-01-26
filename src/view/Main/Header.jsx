import React from 'react';
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  header: {
    background: palette.primary.main,
    color: palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    padding: 16
  },
  title: {
    [breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
    margin: 0
  },
  button: {
    paddingRight: 8
  },
}))

const Header = ({ toggle, handleToggle }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.header}>
      <Grid container
        alignItems='center'
        justify='space-between'
      >
        <Grid item>
          <Typography
            className={classes.title}
            variant="h3">
            Cinema Handler
          </Typography>
        </Grid>
        <Grid item>

          <Button
          className={classes.button}
            variant='contained'
            color='primary'
            onClick={() => handleToggle(!toggle)}
          >
            <MenuIcon />
          </Button>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Header;