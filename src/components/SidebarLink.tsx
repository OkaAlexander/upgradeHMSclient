import { Box, Chip, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { useLocation } from "react-router-dom";
import { appColors } from "../constants/colors";

interface IProps {
  title: string;
  handleClick: () => void;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  route?: string;
}
export default function SidebarLink({
  title,
  handleClick,
  Icon,
  route,
}: IProps) {
  const location = useLocation();
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
          location.pathname === route ? theme.palette.common.white : "#d0d0d0",
        padding: (theme) => theme.spacing(0.5),
      }}
      onClick={handleClick}
      label={
        <Typography
          sx={(theme) => ({
            flex: 1,
            textAlign: "left",
            width: "100%",
            marginLeft: theme.spacing(1.5),
            fontSize: theme.spacing(2.25),
          })}
          variant="body1"
        >
          {title}
        </Typography>
      }
      avatar={
        <Box>
          <Icon
            sx={{
              color: (theme) =>
                location.pathname === route
                  ? theme.palette.common.white
                  : "gray",
            }}
            htmlColor={appColors.white}
            fontSize="small"
          />
        </Box>
      }
    />
  );
}
