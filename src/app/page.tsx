import Sidebar from "@/components/Sidebar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Box>Main</Box>
    </Box>
  );
}
