import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import MainTable from "./MainTable";


const MainContent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ bgcolor: "#fff", width: "80%", height: "100vh" }}>
      <Typography
        color="initial"
        sx={{
          fontWeight: "bold",
          fontSize: "25px",
          fontVariant: "full-width",
          m: "20px 0px",
        }}
      >
        Welcome To The ToolBox
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            pr: "30px",
            mt: "30px",
          }}
        >
          <Grid item xs={6}>
            <Item sx={{ height: "120px", bgcolor: "blue" }}>
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  m: "10px 30px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: "500",
                    ml: "65px",
                  }}
                >
                  {" "}
                  Themes
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <WidgetsIcon
                    sx={{ fontSize: 50, pt: "12px", color: "#fff" }}
                  />
                  <Typography
                    sx={{ fontSize: "50px", color: "#fff", fontWeight: "100" }}
                  >
                    {" "}
                    37
                  </Typography>
                </Stack>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ height: "120px", bgcolor: "red" }}>
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  m: "10px 30px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: "500",
                    ml: "65px",
                  }}
                >
                  {" "}
                  Answers
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <SignalCellularAltIcon
                    sx={{ fontSize: 50, pt: "12px", color: "#fff" }}
                  />
                  <Typography
                    sx={{ fontSize: "50px", color: "#fff", fontWeight: "100" }}
                  >
                    {" "}
                    626
                  </Typography>
                </Stack>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>

      {/* table */}
      <Box sx={{ mt: "30px", mr: "30px" }}>
        <Item elevation={3}>
          <Stack direction={"row"}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                // label="Size"
                id="outlined-size-small"
                placeholder="What are you looking for?"
                size="small"
              />
            </Box>
            <ReplayIcon color="primary" sx={{ mt: "5px" }} />
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              sx={{
                bgcolor: "green",
                color: "#fff",
                mr: "5px",
                textTransform: "inherit",
              }}
            >
              Search
            </Button>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              sx={{
                bgcolor: "blue",
                color: "#fff",
                mr: "5px",
                textTransform: "inherit",
              }}
            >
              Filter Answer
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              sx={{ bgcolor: "red", color: "#fff", textTransform: "inherit" }}
            >
              Search Themes
            </Button>
          </Stack>
          <MainTable />
        </Item>
      </Box>
    </Box>
  );
};

export default MainContent;
