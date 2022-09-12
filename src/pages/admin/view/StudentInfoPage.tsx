import { Camera, NfcOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  FcBusiness,
  FcBusinessman,
  FcGraduationCap,
  FcSearch,
} from "react-icons/fc";
import { GetRoutes, PostRoutes } from "../../../api";
import { useAppDispatch } from "../../../app/hooks";
import { CustomInput, Input, ResponseDisplay } from "../../../components";
import configuration from "../../../configurations/configurations";
import controller from "../../../controller";
import {
  responseFail,
  responsePending,
  responseSuccess,
} from "../../../features/slice/ResponseReducer";
import StudentModel from "../../../model/StudentModel";
import ConfirmationModalView from "../../../views/ConfirmationModalView";

export default function StudentInfo() {
  const [info, setInfo] = useState<StudentModel | null>(null);
  const [error, setError] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);
  const [confirmDelete, setComfirmDelete] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  async function HandleSearch() {
    try {
      dispatch(responsePending());
      const results = await controller.Get<StudentModel>({
        url: GetRoutes.searchStudent(query),
      });
      setInfo(results);
      setError(null);
      dispatch(responseSuccess(null));
    } catch (error) {
      setError(error);
      setInfo(null);
      setMessage(null);
      dispatch(responseFail(null));
    }
  }

  async function HandleInfoUpdate() {
    try {
      dispatch(responsePending());
      setError(null);
      setMessage(null);
      const response = await controller.Post<{
        data: StudentModel;
        message: string;
      }>({ url: PostRoutes.student_info_update, data: info });
      setMessage(response.message);
      dispatch(responseSuccess(null));
    } catch (error) {
      setError(error);
      setMessage(null);
      dispatch(responseFail(null));
    }
  }
  async function HandleStudentDelete() {
    try {
      dispatch(responsePending());
      setError(null);
      setMessage(null);
      const response = await controller.Post<string>({
        url: PostRoutes.student_delete,
        data: info,
      });
      setMessage(response);
      dispatch(responseSuccess(null));
      setInfo(null);
    } catch (error) {
      setError(error);
      setMessage(null);
      dispatch(responseFail(null));
    }
  }
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        alignSelf: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <ConfirmationModalView
        open={confirmDelete}
        title="Delete Student"
        message={`Do you want to Delete ${info?.studentName}`}
        handleClose={() => setComfirmDelete(false)}
        handleResponse={() => {
          HandleStudentDelete();
          setComfirmDelete(false);
        }}
      />
      <Container
        sx={(theme) => ({
          boxShadow: theme.shadows[1],
          padding: theme.spacing(1),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: theme.spacing(1, 0),
          alignSelf: "center",
        })}
      >
        <Typography variant="body1">Student Details</Typography>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          })}
        >
          <Input
            label=""
            props={{
              variant: "standard",
              size: "small",

              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FcGraduationCap />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={HandleSearch} size="small">
                      <FcSearch />
                    </IconButton>
                  </InputAdornment>
                ),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    HandleSearch();
                  }
                },
              },
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search By Ref/Phone",
            }}
            handleChange={(e) => console.log(e)}
          />
        </Box>
      </Container>
      <ResponseDisplay message={message} error={error} />
      <Container sx={(theme) => ({ marginTop: theme.spacing(1.5) })}>
        <Stack
          sx={(theme) => ({
            padding: theme.spacing(2),
            boxShadow: theme.shadows[1],
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
            },
          })}
          direction="row"
        >
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput
              props={{
                value: info ? info.studentName : "",
                onChange: (e) => {
                  info && setInfo({ ...info, studentName: e.target.value });
                },
              }}
              label="Student Name"
            />
            <CustomInput
              props={{ value: info ? info.indexNumber : "" }}
              label="Index Number"
            />
            <CustomInput
              props={{ value: info ? info.programme : "" }}
              label="Program"
            />
            <CustomInput
              props={{ value: info ? info.studentLevel : "" }}
              label="Level"
            />
            <CustomInput
              props={{
                value: info ? info.phoneNumber : "",
                onChange: (e) => {
                  info && setInfo({ ...info, phoneNumber: e.target.value });
                },
              }}
              label="Phone Number"
            />
          </Box>
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput
              props={{ value: info ? info.gender : "" }}
              label="Gender"
            />
            <CustomInput
              props={{
                value: info ? info.email : "",
                onChange: (e) => {
                  info && setInfo({ ...info, email: e.target.value });
                },
              }}
              label="Email Address"
            />
            <CustomInput
              props={{ value: info ? info.academicYear : "" }}
              label="Academic Year"
            />
            <CustomInput
              props={{ value: info ? info.hostelId : "" }}
              label="Hostel"
            />
            <CustomInput
              props={{ value: info ? info.roomNumber : "" }}
              label="Room Number"
            />
          </Box>
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <Box
              sx={(theme) => ({
                width: 200,
                height: 200,
                background: "#f0f0f0",
                alignSelf: "center",
                borderRadius: theme.spacing(0.5),
                boxShadow: theme.shadows[1],
              })}
            >
              {info ? (
                <img
                  alt="student"
                  src={configuration.remoteResource + info?.picture}
                />
              ) : (
                <FcBusinessman size={200} />
              )}
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                width: "55%",
                alignSelf: "center",
                margin: theme.spacing(0.5, 0),
              })}
            >
              {/* <FormGroup sx={(theme) => ({})}>
                <TextField
                  variant="outlined"
                  type="file"
                  sx={(theme) => ({ display: "none" })}
                  id="file-input"
                />
                <FormLabel
                  sx={(theme) => ({
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    margin: theme.spacing(0.5, 0),
                    cursor: "pointer",
                  })}
                  htmlFor="file-input"
                >
                  <Typography variant="body2">choose image</Typography>
                </FormLabel>
              </FormGroup> */}
              {info && (
                <React.Fragment>
                  <Button
                    sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={HandleInfoUpdate}
                  >
                    Update
                  </Button>
                  <Button
                    sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => setComfirmDelete(!confirmDelete)}
                  >
                    Delete
                  </Button>
                </React.Fragment>
              )}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
