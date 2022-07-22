import { PhoneOutlined, ReadMoreOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, CustomDivider, Row, SizedBox, SmallText } from "../components";
import HostelModel from "../model/HostelModel";
import Images from "../resources/Images";

interface IProps {
  info: HostelModel;
}
export default function HostelCard({ info }: IProps) {
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
        <img src={Images.hostel} alt="" />
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
          minHeight: "50px",
        })}
      >
        <Text text={info.hostelName} />
        <CustomDivider />
        <Row
          padding={{ x: 1, y: 0 }}
          children={[
            <PhoneOutlined fontSize="small" />,
            <SmallText text="+233550465223" />,
            <SizedBox width={0.5} />,
            <IconButton
              onClick={() => navigation(`hostels/?id=${info.hostelId}`)}
              size="small"
            >
              <ReadMoreOutlined />
            </IconButton>,
          ]}
        />
      </Box>
    </Grid>
  );
}
