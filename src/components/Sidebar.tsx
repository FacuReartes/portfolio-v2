import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, List, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Box sx={{ bgcolor: 'primary.main', width: '300px', height: '85vh', position: 'relative'}}>
      <Typography variant='h4' component='h1' sx={{ color: 'common.white' }}>Reartes Facundo</Typography>
      <Typography variant='h5' component='h2' sx={{ color: 'common.white' }}>Front End Developer</Typography>
      <List sx={{ position: 'absolute', bottom: 5 }}>
        <ListItemIcon><GitHub/></ListItemIcon>
        <ListItemIcon><LinkedIn/></ListItemIcon>
        <ListItemIcon><Instagram/></ListItemIcon>
        <ListItemIcon><Email/></ListItemIcon>
      </List>
    </Box>
  )
}

export default Sidebar