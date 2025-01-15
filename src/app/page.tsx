import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';

const experiences = [
  {
    title: 'Software developer',
    workplace: 'Workplace',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates quia officia adipisci facere aperiam illo ea libero cum obcaecati consectetur vel iure amet dolorem modi, harum saepe perferendis expedita!',
    date: '24 Jan - Present',
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        py: 7,
        bgcolor: 'secondary.main',
        color: 'common.white',
      }}
    >
      <Sidebar />
      <Box sx={{ width: '900px', px: '40px', pt: 4 }}>
        <Typography variant="h4" component="h3" sx={{ pb: 1 }} id="about">
          About
        </Typography>
        <Typography sx={{ pb: 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
          eum cumque perferendis quasi pariatur repellat, quis mollitia!
          Veritatis incidunt, totam asperiores facere similique ipsam? Vitae
          eaque sint dolorem magnam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam vel eum cumque perferendis quasi pariatur
          repellat, quis mollitia! Veritatis incidunt, totam asperiores facere
          similique ipsam? Vitae eaque sint dolorem magnam!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
          eum cumque perferendis quasi pariatur repellat, quis mollitia!
          Veritatis incidunt, totam asperiores facere similique ipsam? Vitae
          eaque sint dolorem magnam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam vel eum cumque perferendis quasi pariatur
          repellat, quis mollitia! Veritatis incidunt, totam asperiores facere
          similique ipsam? Vitae eaque sint dolorem magnam!
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ pb: 2, pt: 6 }}
          id="experience"
        >
          Experience
        </Typography>
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
          workplace={experiences[0].workplace}
        />
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
          workplace={experiences[0].workplace}
        />
        <Typography
          variant="h4"
          component="h3"
          sx={{ pb: 2, pt: 2 }}
          id="projects"
        >
          Projects
        </Typography>
        <Project />
        <Project />
        <Typography
          variant="h4"
          component="h3"
          sx={{ pb: 1, pt: 2 }}
          id="education"
        >
          Education
        </Typography>
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
          workplace={experiences[0].workplace}
        />
      </Box>
    </Box>
  );
}
