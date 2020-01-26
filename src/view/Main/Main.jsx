import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header'
import SideBar from './SideBar'
import paths from '../../static/paths'
import Repertory from '../Repertory/Repertory'
import Welcome from '../Welcome/Welcome'


const Main = () => {
  const [toggle, setToggle] = useState(false)

  return ( 
    <Grid container
      direction='column'
    >
      <Header toggle={toggle} handleToggle={setToggle} />
      <SideBar toggle={toggle} handleToggle={setToggle} />
      <Grid item>
        <Router>
        <Route exact path={paths.default}>
            <Welcome />
          </Route>
          <Route path={paths.repertory}>
            <Repertory />
          </Route>
        </Router>
      </Grid>
    </Grid>
  )
}

export default Main