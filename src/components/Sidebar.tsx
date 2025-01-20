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
        width: { xs: '100%', sm: '600px', md: '750px', lg: '300px' },
        height: { xs: 'unset', lg: '85vh' },
        position: { xs: 'static', lg: 'sticky' },
        top: 56,
        pt: 4,
        px: 2,
        alignSelf: { xs: 'center', lg: 'unset' },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ pb: 1, textAlign: { xs: 'center', lg: 'unset' } }}
      >
        Reartes Facundo
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ px: 2, textAlign: { xs: 'center', lg: 'unset' } }}
      >
        IT Engineer Student
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ px: 2, textAlign: { xs: 'center', lg: 'unset' } }}
      >
        Front End Developer
      </Typography>
      <Divider sx={{ borderColor: 'common.white', pt: 2 }} />
      <List sx={{ display: { xs: 'none', lg: 'block' } }}>
        <ListItemButton href="#about">About</ListItemButton>
        <ListItemButton href="#experience">Experience</ListItemButton>
        <ListItemButton href="#projects">Projects</ListItemButton>
        <ListItemButton href="#education">Education</ListItemButton>
      </List>
      <Divider
        sx={{
          borderColor: 'common.white',
          pt: 1,
          display: { xs: 'none', lg: 'block' },
        }}
      />
      <List>
        <ListItem>
          <ListItemIcon
            sx={{ color: 'primary.main', minWidth: 'unset', mr: 2 }}
          >
            <Place />
          </ListItemIcon>
          <ListItemText>Cordoba, Argentina</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            sx={{ color: 'primary.main', minWidth: 'unset', mr: 2 }}
          >
            <Mail />
          </ListItemIcon>
          <ListItemText>facureartes9@gmail.com</ListItemText>
        </ListItem>
      </List>
      <Divider
        sx={{
          borderColor: 'common.white',
          pt: 1,
          mb: 1,
          display: { xs: 'block', lg: 'none' },
        }}
      />
      <List
        sx={{
          position: { xs: 'static', lg: 'absolute' },
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
          href="mailto:facureartes9@gmail.com"
        >
          <Email sx={{ fontSize: 30 }} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
