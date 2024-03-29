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
import {
  FcDepartment,
  FcFeedback,
  FcKey,
  FcManager,
  FcPhone,
} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { UserRegisterThunk } from "../../../functions/auth";
import UserModel, { UserModelInfo } from "../../../model/UserModel";

//
interface IInfo extends UserModel {
  password: string;
}
export default function AdminRegisterPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.UserReducer);
  const [info, setInfo] = useState<IInfo>({
    ...UserModelInfo,
    password: "",
    id: "newuser",
  });
  useEffect(() => {
    user && Boolean(user.status) && navigation("/admin/home");
    user && !Boolean(user.status) && navigation("/admin/pending");
  }, [user]);

  function initRegister() {
    dispatch(UserRegisterThunk(info));
  }

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
              placeholder="Full Name"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcManager />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="PhoneNumber"
              type="tel"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcPhone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email Address"
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
              type={visible ? "text" : "password"}
              size="small"
              placeholder="Password"
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
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

            <Button
              onClick={initRegister}
              size="small"
              color="primary"
              variant="contained"
            >
              Register
            </Button>
            <Button
              sx={(theme) => ({ textTransform: "none" })}
              variant="outlined"
              size="small"
              onClick={() => navigation("/admin/login")}
            >
              already Registered? Login
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
