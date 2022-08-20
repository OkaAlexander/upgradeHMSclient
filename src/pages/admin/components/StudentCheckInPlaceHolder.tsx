import { AccountCircleOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Expanded, SizedBox } from "../../../components";
import FlatIcons from "../../../constants/icons";
import Images from "../../../resources/Images";

export default function StudentCheckInCard() {
  return (
    <Stack
      direction="row"
      sx={(theme) => ({
        margin: theme.spacing(0.5),
        minHeight: "120px",
        borderRadius: theme.spacing(0.5),
        background: theme.palette.action.hover,
        boxShadow: theme.shadows[0],
        padding: theme.spacing(0, 0.25),
        pl: 2,
        opacity: 0.25,
        border: "1px solid #d0d0d0",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "80px",
          height: "80px",
          alignSelf: "center",
          border: "1px solid rgba(0,0,0,0.5)",
          borderRadius: "80px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <AccountCircleOutlined
          style={{ fontSize: "80px", color: "#d0d0d0", alignSelf: "center" }}
        />
        {/* <img alt="" src={Images.passportimg} /> */}
      </Box>
      <Stack
        sx={(theme) => ({
          padding: theme.spacing(1, 2),
          justifyContent: "center",
          flex: 1,
        })}
      >
        <Stack direction="row">
          <FlatIcons.FcBusinessman />
          <SizedBox width={0.45} />
          <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
          <Expanded />
          <Typography>CheckIn</Typography>
        </Stack>
        <Stack direction="row">
          <FlatIcons.FcGraduationCap />
          <SizedBox width={0.25} />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipis.
          </Typography>
        </Stack>
        <Stack sx={{ p: 0 }} direction="row">
          <FlatIcons.FcPhone />
          <SizedBox width={0.25} />
          <Typography variant="body2">0000000000</Typography>
          <SizedBox width={1} />
          <Typography variant="body2">0000 00</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
