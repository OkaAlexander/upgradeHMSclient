import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Images from "../../../../resources/Images";

export default function Navbar() {
  return (
    <AppBar
      sx={(theme) => ({
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.paper,
        color: theme.palette.common.black,
      })}
      variant="outlined"
      color="primary"
    >
      <Toolbar
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        })}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box height="40px">
              <img src={Images.school_logo} alt="" />
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Typography variant="body1">Hostel Management System</Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
