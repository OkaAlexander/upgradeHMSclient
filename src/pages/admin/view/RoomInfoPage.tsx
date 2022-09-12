import {
  AccountCircleOutlined,
  CalendarMonthOutlined,
  HistoryOutlined,
  InfoOutlined,
  Refresh,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AppDispatch } from "../../../app/store";
import {
  Text,
  ChipButton,
  Input,
  Row,
  SizedBox,
  SmallText,
  Expanded,
} from "../../../components";
import { appColors } from "../../../constants/colors";
import FlatIcons from "../../../constants/icons";
import { AddKeyLogThunk, GetKeyLogsThunk } from "../../../functions/services";
import {
  GetHostelsThunk,
  GetRoomsThunk,
  GetStudentsThunk,
} from "../../../functions/thunk";
import KeylogModel from "../../../model/KeylogModel";
import StudentModel from "../../../model/StudentModel";
import Images from "../../../resources/Images";
import { RoomStudentView } from "../../../views";
import { GetHostelInfoById } from "../../service";
import { StudentCheckInCard, StudentCheckInPlaceholder } from "../components";

export default function RoomInfoPage() {
  const dispatch = useAppDispatch();
  const [roomData, setRoomData] = useState<StudentModel[]>([]);
  const { rooms } = useAppSelector((state) => state.RoomsReducer);
  const { keylogs } = useAppSelector((state) => state.KeyLogsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const { students } = useAppSelector((state) => state.StudentsReducer);
  const [srch, setSrch] = useState<string>("");
  const [logInfo, setLogInfo] = useState<KeylogModel | null>(null);

  useEffect(() => {
    dispatch(GetRoomsThunk());
    dispatch(GetHostelsThunk());
    dispatch(GetStudentsThunk());
    dispatch(GetKeyLogsThunk());
  }, []);

  useEffect(() => {
    if (roomData.length > 0) {
      const std = roomData[roomData.length - 1];
      const logs = keylogs.filter((k) => k.roomNumber === std.roomNumber);
      logs.length > 0 && setLogInfo(logs[0]);
    }
  }, [roomData, keylogs]);

  function handleSearch() {
    setRoomData(
      students.filter((std) => std.roomNumber === srch.toUpperCase().trim())
    );
  }

  function handleAddKeyLog(data: KeylogModel) {
    dispatch(AddKeyLogThunk(data));
  }

  useEffect(() => {}, [students]);
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.paper,
        padding: theme.spacing(1),
        height: "100%",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: theme.shadows[1],
          borderRadius: 0,
          padding: theme.spacing(1),
          background: theme.palette.common.white,
        })}
      >
        <Stack
          direction="row"
          sx={(theme) => ({
            flex: 1,
            alignItems: "center",
            padding: theme.spacing(0, 2),
            justifyContent: "flex-start",
          })}
        >
          <FlatIcons.FcReadingEbook />
          <SizedBox width={1} />
          <Typography variant="body1">Room Services</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={(theme) => ({
            flex: 1,
            alignItems: "center",
            padding: theme.spacing(0, 2),
            justifyContent: "flex-end",
          })}
        >
          <TextField
            placeholder="Room Number"
            variant="standard"
            onChange={(e) => setSrch(e.target.value)}
            size="small"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <IconButton onClick={handleSearch} size="small">
            <Search />
          </IconButton>
        </Stack>
      </Box>

      <Box sx={{ mt: 1, p: 2 }}>
        <Stack
          sx={(theme) => ({
            padding: theme.spacing(2),
          })}
          direction="row"
        >
          <Stack
            sx={(theme) => ({
              flex: 1.5,
            })}
          >
            {roomData.length > 0
              ? roomData
                  .map((d, index) => {
                    if (index < 2 && roomData.length > 2) {
                      return d;
                    } else if (index < 1) {
                      return d;
                    }
                    return null;
                  })
                  .filter((s) => s !== null)
                  .map((s) =>
                    s ? (
                      <StudentCheckInCard
                        logInfo={logInfo}
                        handleAddKeyLog={handleAddKeyLog}
                        student={s}
                      />
                    ) : (
                      <React.Fragment />
                    )
                  )
              : Array.from({ length: 2 }).map(() => (
                  <StudentCheckInPlaceholder />
                ))}
          </Stack>
          <Stack
            sx={(theme) => ({
              flex: 1.5,
            })}
          >
            {roomData.length > 0
              ? roomData
                  .map((d, index) => {
                    if (index < 4 && index > 1 && roomData.length > 2) {
                      return d;
                    } else if (index === 1) {
                      return d;
                    }
                    return null;
                  })
                  .filter((s) => s !== null)
                  .map((s) =>
                    s ? (
                      <StudentCheckInCard
                        logInfo={logInfo}
                        handleAddKeyLog={handleAddKeyLog}
                        student={s}
                      />
                    ) : (
                      <React.Fragment />
                    )
                  )
              : Array.from({ length: 2 }).map(() => (
                  <StudentCheckInPlaceholder />
                ))}
          </Stack>
        </Stack>
      </Box>

      {Boolean(roomData.length) && (
        <Stack
          direction="row"
          sx={(theme) => ({
            boxShadow: theme.shadows[1],
            padding: theme.spacing(1),
            alignItems: "center",
            justifyContent: "space-between",
            background: theme.palette.common.white,
          })}
        >
          <Stack
            sx={(theme) => ({
              alignItems: "center",
            })}
            direction="row"
          >
            <FlatIcons.FcHome />
            <SizedBox width={0.25} />
            <Typography variant="body1">
              {
                GetHostelInfoById(
                  hostels,
                  `${
                    roomData.length > 0 &&
                    roomData[roomData.length - 1].hostelId
                  }`
                ).hostelName
              }
            </Typography>
            <SizedBox width={2} />
            <FlatIcons.FcReading />
            <SizedBox width={0.25} />
            <Typography variant="body1">
              {roomData.length > 0
                ? roomData[Math.floor(Math.random() * roomData.length)].gender
                : "..."}
            </Typography>
            <SizedBox width={2} />
            <FlatIcons.FcOrganization />
            <SizedBox width={0.25} />
            <Typography variant="body1">
              {roomData.length > 0
                ? roomData[Math.floor(Math.random() * roomData.length)]
                    .roomNumber
                : "..."}
            </Typography>
            <SizedBox width={2} />
          </Stack>
          <Stack
            sx={(theme) => ({
              alignItems: "center",
              justifyContent: "flex-end",
              pr: 3,
            })}
            direction="row"
          >
            <Badge badgeContent={roomData.length} color="primary">
              <FlatIcons.FcConferenceCall />
            </Badge>
            <SizedBox width={1} />
            {logInfo && Boolean(logInfo.action) ? (
              <FlatIcons.FcUnlock />
            ) : (
              <FlatIcons.FcLock />
            )}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
