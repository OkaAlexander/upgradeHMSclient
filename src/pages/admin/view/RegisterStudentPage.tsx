import {
  Box,
  Button,
  Container,
  FormLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { CustomInput } from "../../../components";
import { responseFail } from "../../../features/slice/ResponseReducer";
import { RegisterStudentThunk } from "../../../functions/post";
import StudentModel from "../../../model/StudentModel";
import { handleFilePicker } from "../../../services";
import {
  GenerateAcademicYears,
  GenerateGender,
  GetPrograms,
  InitialStudentInfo,
} from "../data";

export default function RegisterStudentPage() {
  const [info, setInfo] = useState<StudentModel>(InitialStudentInfo);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<{ file: File | null; path: any }>({
    file: null,
    path: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleSubmit() {
    const formData = new FormData();
    var file: any = data.file;
    formData.append("studentName", info.studentName);
    formData.append("phoneNumber", info.phoneNumber);
    formData.append("referenceNumber", info.referenceNumber);
    formData.append("studentLevel", info.studentLevel);
    formData.append("email", info.email);
    formData.append("programme", info.programme);
    formData.append("academicYear", info.academicYear);
    formData.append("gender", info.gender);
    formData.append("hostelId", info.hostelId);
    formData.append("indexNumber", info.indexNumber ? info.indexNumber : "");
    formData.append("file", file);
    dispatch(RegisterStudentThunk(formData));
  }

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingBottom: theme.spacing(10),
      })}
    >
      <Container
        sx={(theme) => ({
          margin: theme.spacing(2, 0),
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignSelf: "center",
        })}
      >
        <Stack
          direction="row"
          sx={(theme) => ({
            padding: theme.spacing(2),
            boxShadow: theme.shadows[1],
            borderRadius: 0,
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
            },
            alignSelf: "center",
            width: "100%",
          })}
          spacing={0}
        >
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput
              props={{ type: "text", value: info.studentName }}
              handleChange={(event) =>
                setInfo({ ...info, studentName: event.target.value })
              }
              label="Student Name"
            />
            <CustomInput
              props={{ type: "tel", value: info.phoneNumber }}
              handleChange={(event) =>
                setInfo({ ...info, phoneNumber: event.target.value })
              }
              label="Phone Number"
            />
            <CustomInput
              props={{ type: "text", value: info.referenceNumber }}
              handleChange={(event) =>
                setInfo({ ...info, referenceNumber: event.target.value })
              }
              label="Reference Number"
            />
            <CustomInput
              props={{ type: "email", value: info.email }}
              handleChange={(event) =>
                setInfo({ ...info, email: event.target.value })
              }
              label="Email"
            />
          </Box>
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput
              label="Level"
              props={{ select: true, value: info.studentLevel }}
            >
              {[100, 200, 300, 400].map((level) => (
                <MenuItem
                  key={level.toString()}
                  value={level.toString()}
                  onClick={() =>
                    setInfo({ ...info, studentLevel: level.toString() })
                  }
                >
                  {level.toString()}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              label="Academic Year"
              props={{ select: true, value: info.academicYear }}
            >
              {GenerateAcademicYears().map((yr) => (
                <MenuItem
                  key={yr}
                  value={yr}
                  onClick={() => setInfo({ ...info, academicYear: yr })}
                >
                  {yr}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              label="Program"
              props={{ select: true, value: info.programme }}
            >
              {GetPrograms().map((p) => (
                <MenuItem
                  value={p}
                  onClick={() => setInfo({ ...info, programme: p })}
                  key={p}
                >
                  {p}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              label="Gender"
              props={{ select: true, value: info.gender }}
            >
              {GenerateGender().map((gender) => (
                <MenuItem
                  value={gender}
                  onClick={() => setInfo({ ...info, gender })}
                  key={gender}
                >
                  {gender}
                </MenuItem>
              ))}
            </CustomInput>
          </Box>
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <Box
              sx={(theme) => ({
                width: 200,
                height: 200,
                borderRadius: theme.spacing(0.5),
                boxShadow: theme.shadows[1],
                alignSelf: "centern",
                margin: theme.spacing(0.5, 0),
                background: "#f5f5f5",
              })}
            >
              <img src={data.path} alt="student" />
            </Box>
            <Box
              sx={(theme) => ({
                width: 200,
                margin: theme.spacing(0.5, 0),
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              })}
            >
              <TextField
                sx={(theme) => ({ display: "none" })}
                variant="outlined"
                type="file"
                size="small"
                id="file-input"
                onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                  setData(await handleFilePicker(e));
                }}
              />
              <FormLabel
                sx={(theme) => ({
                  padding: theme.spacing(0, 1),
                  width: "100%",
                  border: "0.5px solid #d0d0d0",
                  alignSelf: "center",
                  borderRadius: theme.spacing(0.5),
                  cursor: "pointer",
                })}
                htmlFor="file-input"
              >
                <Typography
                  variant="body1"
                  sx={(theme) => ({ textAlign: "center", width: "100%" })}
                >
                  Choose Image
                </Typography>
              </FormLabel>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(1),
            borderRadius: 0,
            boxShadow: theme.shadows[1],
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: theme.spacing(1, 0),
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBotom: theme.spacing(5),
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Hostel" props={{ select: true }} />
          </Box>
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 1),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Room Number" props={{ select: true }} />
          </Box>
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 1),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <Button
              onClick={handleSubmit}
              fullWidth
              size="medium"
              sx={(theme) => ({ height: 38 })}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
