import {
  BookOutlined,
  MoneyOutlined,
  PhoneOutlined,
  ReadMoreOutlined,
} from "@mui/icons-material";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Text,
  CustomDivider,
  Row,
  SizedBox,
  SmallText,
  Expanded,
} from "../components";
import constants from "../constants";
import HostelModel from "../model/HostelModel";
import Images from "../resources/Images";

interface IProps {
  info: HostelModel;
  handleBook: () => void;
}
export default function HostelCard({ info, handleBook }: IProps) {
  const navigation = useNavigate();
  return (
    <Grid
      item
      xs={10}
      sm={5}
      md={4}
      lg={3}
      xl={3}
      sx={(theme) => ({
        margin: theme.spacing(2.5, 1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "200px",
        borderRadius: theme.spacing(0.5),
        boxShadow: theme.shadows[1],
        position: "relative",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "inherit",
          overflow: "hidden",
          flex: 1,
        })}
      >
        <img src={Images.hostelavatar} alt="" />
      </Box>
      <Box
        sx={(theme) => ({
          borderRadius: theme.spacing(0.5),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          boxShadow: theme.shadows[2],
          zIndex: 1,
          position: "absolute",
          bottom: "-30px",
          left: "5%",
          width: "90%",
          alignSelf: "center",
          minHeight: "80px",
          padding: theme.spacing(1),
        })}
      >
        <Typography sx={{ fontWeight: "bold" }}>{info.hostelName}</Typography>
        {/* <Text text={info.hostelName} /> */}
        <CustomDivider />
        <Row
          padding={{ x: 1, y: 0 }}
          children={[
            //<MoneyOutlined fontSize="small" />,
            <SmallText
              text={`${"Hostel Fee:"} ${constants.currency}${info.price}`}
            />,

            <SizedBox width={0.5} />,
            // <Chip
            //   size="small"
            //   onClick={handleBook}
            //   sx={(theme) => ({
            //     background: theme.palette.background.paper,
            //     height: "25px",
            //     padding: theme.spacing(0, 1),
            //     alignSelf: "flex-end",
            //   })}
            //   label={"Book now"}
            // />,
          ]}
        />
        <CustomDivider />
        <Row
          padding={{ x: 1, y: 0 }}
          children={[
            //<MoneyOutlined fontSize="small" />,
            //<SmallText text={`${constants.currency}${info.price}`} />,
            <SizedBox width={0.5} />,
            <Typography sx={{ backgroundColor: "transparent" }}>
              {info.description}
            </Typography>,
          ]}
        />
        <Row
          padding={{ x: 1, y: 0 }}
          children={[
            //<MoneyOutlined fontSize="small" />,
            //<SmallText text={`${constants.currency}${info.price}`} />,
            <SizedBox width={0.5} />,
            <Chip
              variant="outlined"
              color="success"
              onClick={handleBook}
              sx={(theme) => ({
                background: theme.palette.background.paper,
                height: "25px",
                padding: theme.spacing(0, 2),
                alignSelf: "flex-end",
              })}
              label={"Book now"}
            />,
          ]}
        />
      </Box>
    </Grid>
  );
}
