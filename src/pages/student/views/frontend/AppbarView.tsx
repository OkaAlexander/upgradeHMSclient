import { Box, Typography } from "@mui/material";
import React from "react";
import Images from "../../../../resources/Images";

export default function AppbarView() {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(2),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: theme.spacing(6),
      })}
    >
      <Box
        sx={(theme) => ({
          height: "60px",
          [theme.breakpoints.down("sm")]: {
            width: "150px",
          },
        })}
      >
        <img style={{ objectFit: "contain" }} src={Images.school_logo} alt="" />
      </Box>
      <Box>
        <Typography
          sx={(theme) => ({
            fontSize: theme.spacing(2.5),
            fontWeight: "bold",
            color: theme.palette.primary.dark,
            textTransform: "uppercase",
            [theme.breakpoints.down("sm")]: {
              fontSize: theme.spacing(2),
            },
          })}
          variant="body1"
        >
          accommodation
        </Typography>
      </Box>
    </Box>
  );
}
