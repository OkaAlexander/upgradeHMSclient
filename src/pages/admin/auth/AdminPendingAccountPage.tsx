import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

export default function AdminPendingAccountPage() {
  const { user } = useAppSelector((state) => state.UserReducer);
  const navigation = useNavigate();
  useEffect(() => {
    !user && navigation("/admin/login");
    user && Boolean(user.status) && navigation("/admin/home");
  }, [user]);
  return (
    <Box height="70vh">
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        padding={4}
      >
        <Typography variant="h6">
          Hello {user?.name}, your account is pending approval, please contact
          your Administrator for further enquiries. Thank you
        </Typography>
        <Divider />
        <Typography variant="body1">
          you are seeing this page because you account is
          <Typography
            style={{ marginLeft: "10px" }}
            component="span"
            color="error"
          >
            Inactive
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
}
