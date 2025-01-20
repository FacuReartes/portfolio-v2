import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IEducation {
  title: string;
  university: string;
  description: string;
  date: string;
}

const Education: FC<IEducation> = (props) => {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 1, lg: 4 }, pb: 4 }}>
      <Box sx={{ width: { xs: 'auto', sm: '520px', lg: '570px' } }}>
        <Typography variant="h5" component="h4">
          <Typography
            component="span"
            variant="h5"
            sx={{ color: 'primary.main' }}
          >
            {props.title}
          </Typography>
          {', '}
          <Typography component="span" variant="h5">
            {props.university}
          </Typography>
        </Typography>
        <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
          {props.date}
        </Typography>
        <Typography>{props.description}</Typography>
      </Box>
      <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
        {props.date}
      </Typography>
    </Box>
  );
};

export default Education;
