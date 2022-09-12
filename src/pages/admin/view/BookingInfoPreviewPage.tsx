import { Container, Box, MenuItem, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomButton,
  CustomInput,
  Expanded,
  SizedBox,
} from "../../../components";
import configuration from "../../../configurations/configurations";
import { GetBookingsThunk } from "../../../functions/get";
import {
  ApproveBookingThunk,
  GetAvailableRoomsThunk,
} from "../../../functions/post";
import { GetHostelsThunk } from "../../../functions/thunk";
import BookingsModel from "../../../model/BookingsModel";
import RoomModel from "../../../model/RoomModel";
import { GetBookingInfo } from "../../service";
import { InitialBookingInfo } from "../../student/data";
import { InitialRoomInfo } from "../data";

export default function BookingInfoPreviewPage() {
  const { bookings } = useAppSelector((state) => state.BookingsReducer);
  const { rooms } = useAppSelector((state) => state.AvailableRoomsReducer);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
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

  useEffect(() => {
    info.hostelId &&
      dispatch(
        GetAvailableRoomsThunk({
          roomGender: info.gender,
          hostelId: info.hostelId,
        })
      );
  }, [info.gender, info.hostelId]);

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
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
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
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: theme.spacing(2),
            },
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
              [theme.breakpoints.down("sm")]: {
                position: "relative",
              },
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
      <SizedBox height={1} />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(0.5, 2),
          borderBottom: "1px solid #d0d0d0",
          borderRadius: theme.spacing(1),
          width: "72%",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderStyle: "none",
            padding: theme.spacing(2),
          },
        })}
      >
        <CustomInput
          props={{
            size: "small",
            sx: (theme) => ({
              width: "250px",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            }),
            select: true,
          }}
          label="Select Room"
        >
          {rooms.map((room) => (
            <MenuItem
              onClick={() => setInfo({ ...info, roomNumber: room.roomNumber })}
              key={room.roomNumber}
              value={room.roomNumber}
            >
              {room.roomNumber}
            </MenuItem>
          ))}
        </CustomInput>
        <SizedBox width={1} />
        <CustomInput
          props={{
            size: "small",
            value: info.roomNumber,
            sx: (theme) => ({
              width: "250px",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            }),
          }}
          handleChange={(event) =>
            setInfo({ ...info, roomNumber: event.target.value.toUpperCase() })
          }
          label="Enter Room Number"
        />
        <SizedBox width={2} />
        <CustomButton
          props={{
            size: "small",
            sx: (theme) => ({
              width: "150px",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            }),
          }}
          handleClick={() => dispatch(ApproveBookingThunk(info))}
          title="Approve"
        />
        <SizedBox width={1} />
        <CustomButton
          title="Go Back"
          handleClick={() => navigation("/admin/home/bookings")}
          props={{
            variant: "outlined",
            color: "inherit",
            sx: (theme) => ({
              width: "150px",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            }),
          }}
        />
        <Expanded />
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
