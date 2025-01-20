import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Sidebar from '@/components/Sidebar';
import { educations, experiences, projects } from '@/data/data';
import { Timeline, timelineOppositeContentClasses } from '@mui/lab';
import { Box, Typography } from '@mui/material';

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
        <Typography variant="h4" component="h3" sx={{ pb: 2 }} id="about">
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
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.23,
            },
            p: 0,
          }}
        >
          <Experience
            title={experiences[0].title}
            description={experiences[0].description}
            date={experiences[0].date}
            workplace={experiences[0].workplace}
          />
          <Experience
            title={experiences[1].title}
            description={experiences[1].description}
            date={experiences[1].date}
            workplace={experiences[1].workplace}
          />
        </Timeline>
        <Typography
          variant="h4"
          component="h3"
          sx={{ pb: 2, pt: 6 }}
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
          sx={{ pb: 2, pt: 2 }}
          id="education"
        >
          Education
        </Typography>
        <Education
          title={educations[0].title}
          description={educations[0].description}
          date={educations[0].date}
          university={educations[0].university}
        />
      </Box>
    </Box>
  );
}
