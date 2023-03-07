import React from "react";
import {
  Box,
  Stack,
  Paper,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { red } from "@mui/material/colors";


import { styled } from "@mui/material/styles";
// import Avatar from "@mui/material/Avatar";

const SideBar = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
//   list
 const [selectedIndex, setSelectedIndex] = React.useState(1);

 const handleListItemClick = (event, index) => {
   setSelectedIndex(index);
 };
  return (
    <Box
      backgroundColor="#fff"
      sx={{ width: "20%",height:"100vh", p: "5px 30px", }}
    >
      <Stack spacing={2} sx={{ overflowY: "scroll" }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img width="70%" height="70%" src="../assets/total.png" alt="" />
        </Box>
        <Box
          backgroundColor="#fff"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar src="#" alt="" sx={{ width: 80, height: 80 }}></Avatar>
          <Typography sx={{ fontWeight: "bold" }}>Systems Manager</Typography>
          <Typography color="gray">ADMIN</Typography>
        </Box>

        <Box>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: red[700] }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <AddIcon sx={{ color: red[700] }} />
              </ListItemIcon>
              <ListItemText primary="Add Data" />
            </ListItemButton>
            {/* create */}
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <ImportExportIcon sx={{ color: red[700] }} />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </List>
          <Divider />

          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <ContentCopyIcon sx={{ color: red[700] }} />
            </ListItemIcon>
            <ListItemText primary="System Logs" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <RestoreFromTrashIcon sx={{ color: red[700] }} />
            </ListItemIcon>
            <ListItemText primary="Recycle Bin" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <SettingsIcon sx={{ color: red[700] }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
