import {
  EditOutlined,
  HouseOutlined,
  MoneyOutlined,
} from "@mui/icons-material";
import { Box, Chip, Divider, IconButton } from "@mui/material";
import React from "react";
import { BigText, Expanded, Row, SizedBox, SmallText } from "../components";
import constants from "../constants";
import { appColors } from "../constants/colors";
import HostelModel from "../model/HostelModel";

interface IProps {
  info: HostelModel;
}
export default function HostelInfoView({ info }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: theme.shadows[2],
        margin: theme.spacing(1, 2),
        width: 250,
        paddingTop: theme.spacing(1.5),
        [theme.breakpoints.down("sm")]: {
          width: "85%",
        },
        position: "relative",
      })}
    >
      <IconButton
        sx={(theme) => ({
          position: "absolute",
          right: "10px",
          top: "5px",
        })}
        size="small"
      >
        <EditOutlined />
      </IconButton>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        })}
      >
        <HouseOutlined fontSize="large" htmlColor={appColors.darkWine} />
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(1),
        })}
      >
        <BigText text={info.HostelName} />
      </Box>
      <Divider />
      <Row
        padding={{ x: 1, y: 0 }}
        children={[
          <BigText text="Capacity" />,
          <Expanded />,
          <BigText text={info.TotalCapacity.toString()} />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0 }}
        children={[
          <BigText text="Pending" />,
          <Expanded />,
          <BigText text={info.TotalBooked.toString()} color={"firebrick"} />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0 }}
        children={[
          <BigText text="Approved" />,
          <Expanded />,
          <BigText text={info.TotalApproved.toString()} color="seagreen" />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0 }}
        children={[
          <BigText text="Available" />,
          <Expanded />,
          <BigText text={info.SlotLeft.toString()} />,
        ]}
      />
      <Divider />
      <Box
        sx={(theme) => ({
          padding: theme.spacing(1.5),
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Chip
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
          })}
          label={<SmallText text={constants.currency + "2150"} />}
          avatar={<MoneyOutlined fontSize="small" />}
        />
      </Box>
    </Box>
  );
}
