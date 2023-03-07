import React from 'react'
import { Box, Stack } from "@mui/material";
import SideBar from './SideBar';
import MainContent from './MainContent';

const HomeMain = () => {
  return (
    <Stack
      direction={"row"}
      backgroundColor="#fff"
      flex={8}
      sx={{ mt: "-70px" }}
    >
      <SideBar />
      <MainContent />
    </Stack>
  );
}

export default HomeMain