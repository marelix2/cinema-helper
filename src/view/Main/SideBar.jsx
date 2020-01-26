import React from 'react'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'

const SideBar = ({ toggle, handleToggle }) =>  (
    <Grid item>
    <Drawer anchor="right" open={toggle} onClose={() => handleToggle(false)}>
      <Button>Strona główna</Button>
      <Button>Repertuar</Button>
      <Button>Sale kinowe</Button>
      <Button>Rezerwacje</Button>
    </Drawer>
  </Grid>
  );

export default SideBar