import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Place,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '330px',
        height: '85vh',
        position: 'sticky',
        top: 56,
        pt: 4,
        px: '30px',
      }}
    >
      <Typography variant="h4" component="h1" sx={{ pb: 1 }}>
        Reartes Facundo
      </Typography>
      <Typography variant="h5" component="h2" sx={{ px: 2 }}>
        IT Engineer Student
      </Typography>
      <Typography variant="h5" component="h2" sx={{ px: 2 }}>
        Front End Developer
      </Typography>
      <Divider sx={{ borderColor: 'common.white', pt: 2 }} />
      <List>
        <ListItemButton href="#about">About</ListItemButton>
        <ListItemButton href="#experience">Experience</ListItemButton>
        <ListItemButton href="#projects">Projects</ListItemButton>
        <ListItemButton href="#education">Education</ListItemButton>
      </List>
      <Divider sx={{ borderColor: 'common.white', pt: 1 }} />
      <List>
        <ListItem>
          <ListItemIcon
            sx={{ color: 'common.white', minWidth: 'unset', mr: 2 }}
          >
            <Place />
          </ListItemIcon>
          <ListItemText>Cordoba, Argentina</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ color: 'common.white', minWidth: 'unset', mr: 2 }}
          >
            <Mail />
          </ListItemIcon>
          <ListItemText>facureartes9@gmail.com</ListItemText>
        </ListItem>
      </List>
      <List
        sx={{
          position: 'absolute',
          bottom: 8,
          width: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          boxSizing: 'border-box !important',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <ListItemButton
          sx={{
            justifyContent: 'center',
            ':hover': { color: 'primary.main' },
            transition: 'all 0.2s linear',
            flexGrow: 0,
          }}
          href="https://github.com/FacuReartes"
          target="_blank"
        >
          <GitHub sx={{ fontSize: 30 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: 'center',
            ':hover': { color: 'primary.main' },
            transition: 'all 0.2s linear',
            flexGrow: 0,
          }}
          href="https://www.linkedin.com/in/facundo-reartes-63168423a/"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: 30 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: 'center',
            ':hover': { color: 'primary.main' },
            transition: 'all 0.2s linear',
            flexGrow: 0,
          }}
          href="https://www.instagram.com/facureartes1/"
          target="_blank"
        >
          <Instagram sx={{ fontSize: 30 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            minWidth: 'unset',
            justifyContent: 'center',
            ':hover': { color: 'primary.main' },
            transition: 'all 0.2s linear',
            flexGrow: 0,
          }}
        >
          <Email sx={{ fontSize: 30 }} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
