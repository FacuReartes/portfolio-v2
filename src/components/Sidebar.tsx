import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, List, ListItemIcon, Typography } from '@mui/material';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '330px',
        height: '85vh',
        position: 'relative',
        pt: 4,
        px: '30px',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: 'common.white', pb: 1 }}
      >
        Reartes Facundo
      </Typography>
      <Typography variant="h5" component="h2" sx={{ color: 'common.white' }}>
        Front End Developer
      </Typography>
      <List
        sx={{
          position: 'absolute',
          bottom: 8,
          width: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          boxSizing: 'border-box !important',
        }}
      >
        <ListItemIcon>
          <GitHub sx={{ color: 'common.white', fontSize: 30 }} />
        </ListItemIcon>
        <ListItemIcon>
          <LinkedIn sx={{ color: 'common.white', fontSize: 30 }} />
        </ListItemIcon>
        <ListItemIcon>
          <Instagram sx={{ color: 'common.white', fontSize: 30 }} />
        </ListItemIcon>
        <ListItemIcon sx={{ minWidth: 'unset' }}>
          <Email sx={{ color: 'common.white', fontSize: 30 }} />
        </ListItemIcon>
      </List>
    </Box>
  );
};

export default Sidebar;
