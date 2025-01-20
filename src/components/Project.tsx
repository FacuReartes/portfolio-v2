'use client';
import { ArrowOutward, GitHub, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProject {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imgSrc: string;
  tools: string[];
}

const Project: FC<IProject> = (props) => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.up('md'));

  const renderTools = props.tools.map((tool: string, index: number) => (
    <ListItem
      key={index}
      sx={{
        bgcolor: 'primary.main',
        borderRadius: '10px',
        px: 1,
        py: 0.5,
        color: 'common.white',
        width: 'unset',
      }}
    >
      {tool}
    </ListItem>
  ));

  const projectImage = (
    <Button
      sx={{
        p: 0,
        mt: 1,
        lineHeight: 'unset',
        flexShrink: 0,
        width: '250px',
        height: '130px',
        border: 2,
        bgcolor: 'primary.main',
        borderColor: 'secondary.main',
        borderRadius: '5px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.2s linear',
        ':hover .projectOverlayIcon': {
          opacity: 1,
        },
        ':hover': {
          cursor: 'pointer',
          borderColor: 'common.white',
        },
        ':hover .projectImage': {
          transform: 'scale(1.1)',
          opacity: 0.8,
        },
        alignSelf: 'center',
      }}
      href={props.liveLink}
      target="_blank"
    >
      <Image
        className="projectImage"
        src={props.imgSrc}
        alt="project image"
        fill
        style={{ transition: 'inherit' }}
      />
      <Icon
        className="projectOverlayIcon"
        sx={{
          zIndex: 99,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'primary.main',
          opacity: 0,
          transition: 'inherit',
        }}
      >
        <Visibility />
      </Icon>
    </Button>
  );

  return (
    <Box sx={{ display: 'flex', gap: 4, pb: 4 }}>
      {isSm && projectImage}
      <Box sx={{ textAlign: 'center', md: 'unset' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{ color: 'primary.main' }}
          >
            {props.title}
          </Typography>
          <Box>
            <Button
              sx={{
                color: 'common.white',
                minWidth: 'unset',
                ':hover': { color: 'primary.main', bgcolor: 'unset' },
                transition: 'all 0.2s linear',
                position: 'relative',
                paddingRight: { xs: 'unset', md: 0 },
              }}
              href={props.liveLink}
              target="_blank"
            >
              Live{' '}
              <ArrowOutward
                sx={{ fontSize: 14, top: -5, position: 'relative' }}
              />
            </Button>
            <IconButton
              sx={{
                color: 'common.white',
                py: 1,
                mr: { xs: 'unset', md: 2, lg: 4 },
                ':hover': { color: 'primary.main' },
                transition: 'all 0.2s linear',
              }}
              href={props.githubLink}
              target="_blank"
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
        {!isSm && projectImage}
        <Typography sx={{ pb: 1, pt: { xs: 1, md: 0 } }}>
          {props.description}
        </Typography>
        <List
          sx={{
            display: 'flex',
            gap: 1,
            p: 0,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'unset' },
          }}
        >
          {renderTools}
        </List>
      </Box>
    </Box>
  );
};

export default Project;
