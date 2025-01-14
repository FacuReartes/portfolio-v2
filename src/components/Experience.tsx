import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IExperience {
  title: string;
  description: string;
  date: string;
}

const Experience: FC<IExperience> = (props) => {
  return (
    <Box sx={{ display: 'flex', gap: 4, pb: 2 }}>
      <Box sx={{ width: '600px' }}>
        <Typography variant="h5" component="h4" sx={{ color: 'common.white' }}>
          {props.title}
        </Typography>
        <Typography sx={{ color: 'common.white' }}>
          {props.description}
        </Typography>
      </Box>
      <Typography sx={{ color: 'common.white' }}>{props.date}</Typography>
    </Box>
  );
};

export default Experience;
