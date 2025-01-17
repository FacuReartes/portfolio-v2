import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IExperience {
  title: string;
  workplace: string;
  description: string;
  date: string;
}

const Experience: FC<IExperience> = (props) => {
  return (
    <Box sx={{ display: 'flex', gap: 4, pb: 4 }}>
      <Box sx={{ width: '600px' }}>
        <Typography variant="h5" component="h4">
          <Typography
            component="span"
            variant="h5"
            sx={{ color: 'primary.main' }}
          >
            {props.title}
          </Typography>
          {', '}
          <Typography
            component="span"
            variant="h5"
          >
            {props.workplace}
          </Typography>
        </Typography>
        <Typography>{props.description}</Typography>
      </Box>
      <Typography>{props.date}</Typography>
    </Box>
  );
};

export default Experience;
