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
  {
    title: 'Ingeniería en Sistemas de Información',
    workplace: 'UTN',
    description:
      'Currently pursuing a degree in Software Systems Engineering in Universidad Tecnológica Nacional at Córdoba, Argentina. Where I deepen my understanding in software development, refine my problem-solving skills and learn engineering principles',
    date: 'Apr 2021 - Present',
  },
];

const projects = [
  {
    title: 'Solvd.Laba Shoe Shop',
    description:
      'Footwear store developed as a final project of the Solvd.Laba frontend course, worked on in a collaborative team environment where I had the role of team lead.',
    liveLink: 'https://react-laba-final-project-team-2.vercel.app/',
    githubLink:
      'https://github.com/FacuReartes/react-laba-final-project-team-2',
    imgSrc: '/solvd.laba-shoe-shop.png',
    tools: ['NextJS', 'React Query', 'Typescript', 'MUI', 'NextAuth'],
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
          I am a{' '}
          <Typography component="span" sx={{ color: 'primary.main' }}>
            Software Systems Engineering
          </Typography>{' '}
          student with a deep passion for coding and IT as a whole 👨‍💻. I love
          taking on challenges that help me grow and improve, both personally
          and professionally. While I am currently focused on{' '}
          <Typography component="span" sx={{ color: 'primary.main' }}>
            Front-End Development
          </Typography>
          , I remain curious and open to learn the most I can so who knows what
          exciting opportunities the future might hold!
        </Typography>
        <Typography>
          Besides development, I like doing physical activities, mainly going to
          the gym 💪 or playing football ⚽. I also enjoy music 🎧, gaming 🎮
          and horror movies 🎞️👻. And of course, I'm always{' '}
          <Typography component="span" sx={{ color: 'primary.main' }}>
            drinking mate
          </Typography>{' '}
          🧉.
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
        <Project
          title={projects[0].title}
          description={projects[0].description}
          imgSrc={projects[0].imgSrc}
          githubLink={projects[0].githubLink}
          liveLink={projects[0].liveLink}
          tools={projects[0].tools}
        />
        <Typography
          variant="h4"
          component="h3"
          sx={{ pb: 1, pt: 2 }}
          id="education"
        >
          Education
        </Typography>
        <Experience
          title={experiences[1].title}
          description={experiences[1].description}
          date={experiences[1].date}
          workplace={experiences[1].workplace}
        />
      </Box>
    </Box>
  );
}
