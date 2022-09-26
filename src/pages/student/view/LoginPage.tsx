import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
    student && student.hostelId && navigation("/dashboard/profile");
    student && !student.hostelId && navigation("/hostels");
  }, [navigation, student]);
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
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
          <Typography variant="h5">How to apply</Typography>
          <Typography variant="body2">
            <ol>
              <li>
                Login with your reference number "refer to your admission letter
                for the reference number"
              </li>
              <li>
                Click on the Book Hostel of your preferred hostel and you will
                receive a notification when the booking is successful.
              </li>
              <li>
                Make payment within five working days only when your booking is
                successful to secure your accommodation
              </li>
              <li>
                You can keep visiting this site to check your Booking status
                after payment.
              </li>
              <li>
                <strong>Please Note:</strong> Hostel fees should be paid
                separently from the academic fees. Pay exact amount allocated to
                the hostel you booked.<strong>Contact 0202440507</strong> for
                more info.
              </li>
            </ol>
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
          <Typography>
            NOTE: Pay Hostel fees at any of the underlisted banks
            <strong> ONLY</strong> when your booking is successfull
          </Typography>
          <Stack direction="row" spacing={2}>
            <ul>
              <li>Fidelity Bank</li>
              <li>Zenith Bank</li>
              <li>GCB</li>
            </ul>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
