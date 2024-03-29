import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FcDepartment, FcFeedback, FcKey } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { responseFail } from "../../../features/slice/ResponseReducer";
import { SetHostel } from "../../../features/slice/UserSlice";
import { UserLoginThunk } from "../../../functions/auth";
import { GetHostelsThunk } from "../../../functions/thunk";

export default function AdminLogingPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { user } = useAppSelector((state) => state.UserReducer);
  const [info, setInfo] = useState<{
    password: string;
    email: string;
    hostel: string;
  }>({ password: "", email: "", hostel: "" });
  const { hostels } = useAppSelector((state) => state.HostelsReducer);

  function initLogin() {
    try {
      ValidateLoginInfo(info);
      dispatch(SetHostel(info.hostel));
      dispatch(UserLoginThunk({ password: info.password, email: info.email }));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  useEffect(() => {
    dispatch(GetHostelsThunk());
  }, []);

  useEffect(() => {
    user && Boolean(user.status) && navigation("/admin");
    user && !Boolean(user.status) && navigation("/admin/pending");
  }, [user]);
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
              name="email"
              type="email"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  initLogin();
                }
              }}
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
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
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              type={visible ? "text" : "password"}
              size="small"
              placeholder="Password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  initLogin();
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcKey />
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
              placeholder="Hostel"
              label="Hostel"
              onChange={(e) => setInfo({ ...info, hostel: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  initLogin();
                }
              }}
            >
              {hostels.map((hostel) => (
                <MenuItem value={hostel.hostelId} key={hostel.hostelId}>
                  {hostel.hostelName}
                </MenuItem>
              ))}
            </TextField>

            <Button
              onClick={initLogin}
              size="small"
              color="primary"
              variant="contained"
            >
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
              onClick={() => navigation("/admin/password/reset")}
            >
              Forgot Password?
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function ValidateLoginInfo(info: {
  password: string;
  email: string;
  hostel: string;
}) {
  if (info.email.length <= 0) {
    throw "Email Address Required";
  }
  if (info.password.length <= 0) {
    throw "Password Required";
  }
  if (info.hostel.length <= 0) {
    throw "Please Select Hostel";
  }
}
