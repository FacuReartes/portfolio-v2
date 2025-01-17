import { ArrowOutward, GitHub } from '@mui/icons-material';
import { Box, Button, Icon, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProject {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imgSrc: string;
}

const Project: FC<IProject> = (props) => {
  return (
    <Box sx={{ display: 'flex', gap: 4, pb: 4 }}>
      <Box
        sx={{
          flexShrink: 0,
          width: '250px',
          height: '130px',
          border: 2,
          borderColor: 'secondary.main',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image src={props.imgSrc} alt="project image" fill />
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" component="h4">
            {props.title}
          </Typography>
          <Box>
            <Button sx={{
              color: 'common.white',
              minWidth: 'unset',
              ':hover': { color: 'primary.main', bgcolor: 'unset' },
              transition: 'all 0.2s linear',
              position: 'relative'
            }}
              href={props.githubLink}
              target='_blank'>
              Live <ArrowOutward sx={{ fontSize: 14, top: -5, position: 'relative' }}/>
            </Button>
            <IconButton
              sx={{
                color: 'common.white',
                py: 1,
                mr: 4,
                ':hover': { color: 'primary.main' },
                transition: 'all 0.2s linear',
              }}
              href={props.githubLink}
              target='_blank'
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
        <Typography>
          {props.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Project;
