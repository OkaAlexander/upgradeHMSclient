import { AccountCircleOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Expanded, SizedBox } from "../../../components";
import FlatIcons from "../../../constants/icons";
import StudentModel from "../../../model/StudentModel";
import Images from "../../../resources/Images";
import configuration from "../../../configurations/configurations";
import KeylogModel from "../../../model/KeylogModel";
import moment from "moment";
interface IProps {
  student: StudentModel;
  logInfo: KeylogModel | null;
  handleAddKeyLog: (data: KeylogModel) => void;
}
export default function StudentCheckInCard({
  student,
  logInfo,
  handleAddKeyLog,
}: IProps) {
  return (
    <Stack
      direction="row"
      sx={(theme) => ({
        margin: theme.spacing(0.5),
        minHeight: "120px",
        borderRadius: 0,
        background: theme.palette.action.hover,
        boxShadow: theme.shadows[1],
        padding: theme.spacing(0, 0.25),
        pl: 2,
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100px",
          height: "100px",
          alignSelf: "center",
          border: "1px solid rgba(0,0,0,0.5)",
          borderRadius: "100px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <img alt="" src={configuration.remoteResource + student?.picture} />
      </Box>
      <Stack
        sx={(theme) => ({
          padding: theme.spacing(1, 2),
          justifyContent: "center",
          flex: 1,
        })}
      >
        <Stack direction="row">
          {logInfo &&
          logInfo.referenceNumber === student.referenceNumber &&
          Boolean(logInfo.action) ? (
            <FlatIcons.FcKey />
          ) : (
            <FlatIcons.FcBusinessman />
          )}
          <SizedBox width={0.45} />
          <Typography variant="body1">{student.studentName}</Typography>
          <Expanded />
          <Button
            sx={(theme) => ({
              height: "20px",
              textTransform: "none",
              borderRadius: theme.spacing(0.25),
              background: theme.palette.common.white,
              color: theme.palette.primary.dark,
            })}
            size="small"
            color="primary"
            variant="text"
            onClick={() => {
              const info: KeylogModel = {
                hostelId: student.hostelId,
                username: "samuel",
                referenceNumber: student.referenceNumber,
                dateOfLog: moment().format(),
                action: Boolean(logInfo && logInfo.action) ? 0 : 1,
                roomNumber: student.roomNumber,
                studentName: student.studentName,
                academicYear: student.academicYear,
                id: student.referenceNumber,
              };
              handleAddKeyLog(info);
            }}
          >
            {logInfo && Boolean(logInfo.action) ? "CheckOut" : "CheckIn"}
          </Button>
        </Stack>
        <Stack direction="row">
          <FlatIcons.FcGraduationCap />
          <SizedBox width={0.25} />
          <Typography variant="body2">{student.programme}</Typography>
        </Stack>
        <Stack sx={{ p: 0 }} direction="row">
          <FlatIcons.FcPhone />
          <SizedBox width={0.25} />
          <Typography variant="body2">{student.phoneNumber}</Typography>
          <SizedBox width={1} />
          <Typography variant="body2">
            {"Level " + student.studentLevel}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
