import { Container, Box, MenuItem, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CustomInput, SizedBox } from "../../../components";
import configuration from "../../../configurations/configurations";
import { GetBookingsThunk } from "../../../functions/get";
import { GetHostelsThunk } from "../../../functions/thunk";
import BookingsModel from "../../../model/BookingsModel";
import { GetBookingInfo } from "../../service";
import { InitialBookingInfo } from "../../student/data";

export default function BookingInfoPreviewPage() {
  const { bookings } = useAppSelector((state) => state.BookingsReducer);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;

  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [info, setInfo] = useState<BookingsModel>({
    ...InitialBookingInfo,
    dateBooked: "",
  });

  useEffect(() => {
    dispatch(GetBookingsThunk());
    dispatch(GetHostelsThunk());
  }, []);

  useEffect(() => {
    const ref = id?.split("=")[1];
    setInfo(GetBookingInfo(bookings, ref ? ref : ""));
  }, [id]);

  return (
    <Container
      sx={(theme) => ({
        padding: theme.spacing(2),
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "flex-start",
          width: "100%",
          alignSelf: "center",
        })}
      >
        <Box
          sx={(theme) => ({
            flex: 2.5,
            border: "1px solid #d0d0d0",
            borderRadius: theme.spacing(2),
            padding: theme.spacing(2.5),
            [theme.breakpoints.down("sm")]: {
              width: "95%",
            },
          })}
        >
          <BookingInfoLabel label="Student Name" value={info.studentName} />
          <BookingInfoLabel
            label="Reference Number"
            value={info.referenceNumber}
          />
          <BookingInfoLabel label="Phone Number" value={info.phoneNumber} />
          <BookingInfoLabel label="Programme" value={info.programme} />
          <BookingInfoLabel label="Level" value={info.studentLevel} />

          <BookingInfoLabel label="Gender" value={info.gender} />
          <BookingInfoLabel label="Academic Year" value={info.academicYear} />
          <BookingInfoLabel label="Email Address" value={info.email} />
          <BookingInfoLabel label="Hostel Name" value={info.hostelId} />
          <SizedBox height={-1} />
        </Box>
        <SizedBox width={1} />
        <Box
          sx={(theme) => ({
            flex: 1,
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          })}
        >
          <Box
            sx={(theme) => ({
              width: "250px",
              height: "250px",
              borderRadius: "250px",
              background: "#d0d0d0",
              position: "absolute",
              left: "0",
              alignSelft: "center",
              overflow: "hidden",
              boxShadow: theme.shadows[1],
              border: "1px solid #f0f0f0",
            })}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={configuration.remoteResource + info.picture}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

interface ILabelProps {
  value?: string;
  label?: string;
}
function BookingInfoLabel({ value, label }: ILabelProps) {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        })}
      >
        <Typography
          sx={(theme) => ({
            textAlign: "left",
            flex: 0.25,
          })}
          variant="caption"
        >
          {label}:
        </Typography>
        <SizedBox width={0.25} />
        <Typography
          sx={(theme) => ({
            textAlign: "left",
            flex: 1,
          })}
          variant="body1"
        >
          {value}
        </Typography>
      </Box>
      <Divider />
      <SizedBox height={1} />
    </Box>
  );
}
