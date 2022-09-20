import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
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
export default function ResetPasswordPage() {
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
            <Typography textAlign="center" variant="body1">
              Enter your phone number to reset password
            </Typography>
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

            <Button
              onClick={() => {
                navigation("/admin/password/change");
              }}
              size="small"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
            <Button
              sx={(theme) => ({ textTransform: "none" })}
              variant="outlined"
              size="small"
              onClick={() => navigation("/admin/login")}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
