import { Box, Chip, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appColors } from "../constants/colors";
import { ISidebarRoute } from "../pages/interface";

interface IProps {
  info: ISidebarRoute;
}
export default function SidebarLink({ info }: IProps) {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <Chip
      sx={{
        borderRadius: (theme) => theme.spacing(0.5),
        margin: (theme) => theme.spacing(0.5, 0),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "transparent",
        color: (theme) =>
          location.pathname === info.route
            ? theme.palette.common.white
            : "#d0d0d0",
        padding: (theme) => theme.spacing(0.5),
      }}
      onClick={() => navigation(info.route ? info.route : "")}
      label={
        <Typography
          sx={(theme) => ({
            flex: 1,
            textAlign: "left",
            width: "100%",
            marginLeft: theme.spacing(1.5),
            fontSize: theme.spacing(2.25),
          })}
          variant="body2"
        >
          {info.title}
        </Typography>
      }
      avatar={<info.Icon />}
    />
  );
}
