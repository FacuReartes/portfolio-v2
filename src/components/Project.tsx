import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProject {}

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
        <Image src="/project.png" alt="project image" fill />
      </Box>
      <Box>
        <Typography variant="h6" component="h4">
          Project Title
        </Typography>
        <Typography>
          Project description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt porro dolores sapiente nulla dignissimos? Placeat eius
          quibusdam inventore vero nihil nisi ducimus aliast.
        </Typography>
      </Box>
    </Box>
  );
};

export default Project;
