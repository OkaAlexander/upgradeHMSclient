import { Box, Divider, Stack, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function AdminAuthenticationPage() {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/admin/login");
  }, []);
  return (
    <Box>
      <Navbar />
      <Box marginBottom={3} marginTop="50px">
        <Outlet />
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <Typography variant="body1">
          CopyRight &copy; {moment().format("YYYY")} - University of Energy and
          Natural Resources
        </Typography>
      </Stack>
    </Box>
  );
}
