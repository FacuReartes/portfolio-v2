import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";

export default function Home() {
  return (    
    <Box sx={{ display: 'flex', py: 10, justifyContent: 'center', gap: 10, bgcolor: 'secondary.main' }}>
      <Sidebar/>
      <Box sx={{ bgcolor: 'primary.main', width: '900px' }}>Main</Box>
    </Box>
  );
}
