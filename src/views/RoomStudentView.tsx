import {
  KeyOutlined,
  LockOpen,
  LockOpenOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { Box, Chip } from "@mui/material";
import React from "react";
import { BigText, SmallText } from "../components";
import { appColors } from "../constants/colors";

export default function RoomStudentView() {
  return (
    <Box
      sx={(theme) => ({
        width: 225,
        borderRadius: 0,
        boxShadow: theme.shadows[1],
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Box
        sx={(theme) => ({
          width: 160,
          height: 145,
          background: "#d0d0d0",
          borderRadius: theme.spacing(0.5),
        })}
      ></Box>
      <Box>
        <BigText fontsize={2} color={appColors.darkWine} text="Student Name" />
      </Box>
      <Box>
        <SmallText fontsize={1.5} text="0550465223" />
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Chip
          sx={(theme) => ({
            height: 30,
            borderRadius: theme.spacing(0.5),
            padding: theme.spacing(0, 1),
            width: "90%",
            background: "#f5f5f5",
            boxShadow: theme.shadows[1],
          })}
          onClick={() => {}}
          label={<SmallText fontsize={1.5} text="checkOut" />}
          avatar={<LockOutlined fontSize="small" />}
        />
      </Box>
    </Box>
  );
}
