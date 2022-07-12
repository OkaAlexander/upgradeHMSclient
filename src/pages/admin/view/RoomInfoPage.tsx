import {
  AccountCircleOutlined,
  CalendarMonthOutlined,
  HistoryOutlined,
  InfoOutlined,
  Refresh,
} from "@mui/icons-material";
import { Box, Chip, Divider, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AppDispatch } from "../../../app/store";
import {
  BigText,
  ChipButton,
  Input,
  Row,
  SizedBox,
  SmallText,
} from "../../../components";
import { appColors } from "../../../constants/colors";
import {
  GetHostelsThunk,
  GetRoomsThunk,
  GetStudentsThunk,
} from "../../../functions/thunk";
import { RoomStudentView } from "../../../views";

export default function RoomInfoPage() {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector((state) => state.RoomsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const { students } = useAppSelector((state) => state.StudentsReducer);

  useEffect(() => {
    dispatch(GetRoomsThunk());
    dispatch(GetHostelsThunk());
    dispatch(GetStudentsThunk());
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: theme.spacing(1, 2),
          boxShadow: theme.shadows[1],
        })}
      >
        <ChipButton title="Refresh" Icon={Refresh} handleClick={() => {}} />
        <Input
          label="search"
          handleChange={(e) => {
            console.log(e);
          }}
        />
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: theme.spacing(0.25),
          height: "100%",
        })}
      >
        <Box
          sx={(theme) => ({
            flex: 1,
            height: "100%",
            justifyContent: "flex-start",
            padding: theme.spacing(1),
          })}
        >
          <Grid
            container
            sx={(theme) => ({
              alignItems: "center",
              width: "100%",
              height: "100%",
              overflow: "autoy",
            })}
          >
            {[1, 2, 3, 4].map((index) => (
              <RoomStudentView key={index.toString()} />
            ))}
          </Grid>
        </Box>
        <Box
          sx={(theme) => ({
            width: 300,
            background: "#f0f0f0",
            borderLeft: "1px solid rgba(211,211,211,0.85)",
            height: "100%",
          })}
        >
          <Row
            padding={{ x: 1, y: 0.5 }}
            children={[
              <InfoOutlined />,
              <SizedBox width={1} />,
              <BigText text="Room Details" fontsize={2.5} />,
            ]}
          />
          <Divider />
          <Box
            sx={(theme) => ({
              overflowX: "hidden",
              overflowY: "auto",
              height: "100%",
            })}
          >
            <Box
              sx={(theme) => ({
                padding: theme.spacing(1),
              })}
            >
              <SmallText text="hostelName:" color="gray" />
              <BigText text="GetFund Hostel" fontsize={2} />
              <Divider />
              <SmallText text="roomNumber:" color="gray" />
              <BigText text="A10" fontsize={2} />
              <Divider />
              <SmallText text="roomGender:" color="gray" />
              <BigText text="Female" fontsize={2} />
              <Divider />
              <SmallText text="roomStatus:" color="gray" />
              <BigText text="Unavailable" fontsize={2} />
              <Divider />
              <SmallText text="numberOfStudents:" color="gray" />
              <BigText text="4" fontsize={2} />
              <Divider />
            </Box>
            <SizedBox height={0.5} />
            <Box
              sx={(theme) => ({
                background: "#fff",
              })}
            >
              <Row
                padding={{ x: 1, y: 0.5 }}
                children={[
                  <HistoryOutlined />,
                  <SizedBox width={1} />,
                  <BigText text="Recent Check" color={appColors.darkWine} />,
                ]}
              />
            </Box>
            <Divider />
            <Box
              sx={(theme) => ({
                padding: theme.spacing(1),
                height: "inherit",
              })}
            >
              <SmallText text="dateTime:" color="gray" />
              <BigText text="03/07/2021 01:57am" fontsize={2} />
              <Divider />
              <SmallText text="studentName:" color="gray" />
              <BigText text="Biliksuun Samuel Bhills" fontsize={2} />
              <Divider />
              <SmallText text="userName:" color="gray" />
              <BigText text="Oka Alexander" fontsize={2} />
              <Divider />
              <SmallText text="checkAction:" color="gray" />
              <BigText text="in" fontsize={2} />
              <Divider />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
