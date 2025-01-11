import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, List, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Box>
      <Typography variant='h1'>Reartes Facundo</Typography>
      <Typography variant='h2'>Front End Developer</Typography>
      <List>
        <ListItemIcon><GitHub/></ListItemIcon>
        <ListItemIcon><LinkedIn/></ListItemIcon>
        <ListItemIcon><Instagram/></ListItemIcon>
        <ListItemIcon><Email/></ListItemIcon>
      </List>
    </Box>
  )
}

export default Sidebar