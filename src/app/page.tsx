import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';

const experiences = [
  {
    title: 'Software developer, Workplace',
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
        py: 10,
        justifyContent: 'center',
        gap: 10,
        bgcolor: 'secondary.main',
        height: '100vh'
      }}
    >
      <Sidebar />
      <Box sx={{ bgcolor: 'primary.main', width: '900px', px: '40px', pt: 4, overflowY: 'auto', height: '85vh' }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ color: 'common.white', pb: 1 }}
        >
          About
        </Typography>
        <Typography sx={{ color: 'common.white', pb: 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
          eum cumque perferendis quasi pariatur repellat, quis mollitia!
          Veritatis incidunt, totam asperiores facere similique ipsam? Vitae
          eaque sint dolorem magnam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam vel eum cumque perferendis quasi pariatur
          repellat, quis mollitia! Veritatis incidunt, totam asperiores facere
          similique ipsam? Vitae eaque sint dolorem magnam!
        </Typography>
        <Typography sx={{ color: 'common.white' }}>
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
          sx={{ color: 'common.white', pb: 1, pt: 4 }}
        >
          Experience
        </Typography>
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
        />
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
        />
        <Typography
          variant="h4"
          component="h3"
          sx={{ color: 'common.white', pb: 1, pt: 2 }}
        >
          Projects
        </Typography>
        <Project/>
        <Project/>
        <Typography
          variant="h4"
          component="h3"
          sx={{ color: 'common.white', pb: 1, pt: 2 }}
        >
          Education
        </Typography>
        <Experience
          title={experiences[0].title}
          description={experiences[0].description}
          date={experiences[0].date}
        />
      </Box>
    </Box>
  );
}
