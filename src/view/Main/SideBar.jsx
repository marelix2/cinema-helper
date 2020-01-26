import React from 'react'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import paths from '../../static/paths'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    width: '100%',
    marginBottom: 2,
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none',
  }
}))

const menu = [
  {
    name: 'Strona Główna',
    id: '1',
    path: paths.default,
  },
  {
    name: 'Repertuar',
    id: '2',
    path: paths.repertory,
  },
  {
    name: 'Sale Kinowe',
    id: '3',
    path: paths.default,
  },
  {

    name: 'Rezerwacje',
    id: '4',
    path: paths.default,
  }
]

const SideBar = ({ toggle, handleToggle }) => {

  const classes = useStyles()
  const handleClick = () => {
    handleToggle(false)
  }

  return (
    <Grid item>
      <Drawer anchor="right" open={toggle} onClose={handleClick}>
        {menu.map(({ id, path, name }) => (
          <Link
            className={classes.link}
            key={id}
            to={path}
          >
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleClick}
            >
              {name}
            </Button>
          </Link>
        ))}


      </Drawer>
    </Grid>
  )
}

export default SideBar