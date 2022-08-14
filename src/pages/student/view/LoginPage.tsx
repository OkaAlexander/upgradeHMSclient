import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { StudentLoginThunk } from "../../../functions/post";

export default function LoginPage() {
  const navigation = useNavigate();
  const { student } = useAppSelector((state) => state.StudentReducer);
  const [info, setInfo] = useState<{ referenceNumber: string }>({
    referenceNumber: "",
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    student &&
      (Boolean(student.hostelId)
        ? navigation("/dashboard/profile")
        : navigation("/hostels"));
  }, [student]);
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
    >
      <Box
        sx={(theme) => ({
          width: 400,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
          backgroundColor: "#fff",
          margin: theme.spacing(2, 0),
          minHeight: "100px",
          border: "0px solid #d0d0d0",
          borderRadius: theme.spacing(0.5),
          paddingBottom: theme.spacing(2),
        })}
      >
        <Box
          sx={(theme) => ({
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          })}
        >
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Reference Number"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(StudentLoginThunk(info));
              }
            }}
            onChange={(e) => setInfo({ referenceNumber: e.target.value })}
            sx={(theme) => ({
              marginTop: theme.spacing(2),
            })}
          />
          <Button
            variant="contained"
            size="small"
            sx={(theme) => ({
              width: 150,
              alignSelf: "flex-end",
              margin: theme.spacing(1, 0),
            })}
            onClick={() => dispatch(StudentLoginThunk(info))}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
          padding: theme.spacing(2, 0),
        })}
      >
        <Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <ul>
            <li>Fidelity Bank</li>
            <li>Zenith Bank</li>
            <li>GCB</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
