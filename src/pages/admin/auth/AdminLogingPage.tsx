import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FcDepartment, FcFeedback, FcKey } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function AdminLogingPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigate();
  return (
    <Box>
      <Box
        sx={(theme) => ({
          height: "45vh",
          backgroundColor: theme.palette.action.hover,
          clipPath: "ellipse(78% 100% at 51.96% 0%)",
          zIndex: -1,
        })}
      ></Box>
      <Container
        sx={(theme) => ({
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "-150px",
          zIndex: 100,
        })}
      >
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          zIndex={110}
        >
          <Stack
            sx={(theme) => ({
              width: "400px",
              [theme.breakpoints.down("sm")]: {
                width: "80%",
              },
              boxShadow: theme.shadows[1],
              borderRadius: 0,
              padding: theme.spacing(4),
              backgroundColor: theme.palette.common.white,
              zIndex: 1000,
            })}
            spacing={1.5}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcFeedback />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              type={visible ? "text" : "password"}
              size="small"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small">
                      <FcKey />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setVisible(!visible)}
                      size="small"
                    >
                      {visible ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              select
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcDepartment />
                  </InputAdornment>
                ),
              }}
              placeholder="Hostel"
            />
            <Button size="small" color="primary" variant="contained">
              Login
            </Button>
            <Button
              sx={(theme) => ({ textTransform: "none" })}
              variant="outlined"
              size="small"
              onClick={() => navigation("/admin/register")}
            >
              don't have Account? Register
            </Button>
            <Button
              sx={(theme) => ({ textTransform: "none", alignSelf: "flex-end" })}
              variant="text"
              size="small"
            >
              Forgot Password?
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
