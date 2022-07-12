import { FacebookOutlined, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { SizedBox } from "../components";
import Images from "../resources/Images";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: theme.spacing(1),
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 9090,
        backgroundColor: "#fff",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: theme.spacing(1, 2),
        })}
      >
        <IconButton size="small">
          <Box
            sx={(theme) => ({
              width: "20px",
              height: "20px",
              overflow: "hidden",
            })}
          >
            <img src={Images.logo} alt="" />
          </Box>
        </IconButton>
        <SizedBox width={0.5} />
        <IconButton size="small">
          <YouTube htmlColor="firebrick" />
        </IconButton>
        <SizedBox width={0.5} />
        <IconButton size="small">
          <FacebookOutlined htmlColor="steelblue" />
        </IconButton>
        <SizedBox width={0.5} />
        <IconButton size="small">
          <Twitter htmlColor="#1DA1F2" />
        </IconButton>
      </Box>
    </Box>
  );
}
