import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { List, ListItem, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IExperience {
  title: string;
  description: string;
  date: string;
  workplace: string;
}

const Experience: FC<IExperience> = (props) => {
  return (
    <TimelineItem
      sx={{
        ':before': {
          content: 'none',
        },
      }}
    >
      <TimelineOppositeContent sx={{ display: { xs: 'none', sm: 'block' } }}>
        {props.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
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
            {props.workplace}
          </Typography>
        </Typography>
        <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
          {props.date}
        </Typography>
        <Typography>{props.description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Experience;
