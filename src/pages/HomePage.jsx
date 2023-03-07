import React from "react";
import { Box, Stack } from "@mui/material";

import HomeMain from "../components/HomeMain";

export default function Section() {
  return (
    <Box backgroundColor="#455137" >
      
      <Stack marginTop={8} direction="row">
        

        <HomeMain />
      </Stack>

      
    </Box>
  );
}
