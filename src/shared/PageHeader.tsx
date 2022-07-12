import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
}
export default function PageHeader({ title }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(1),
        width: "100%",
        boxShadow: theme.shadows[1],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(8),
        position: "sticky",
        top: 50,
        backgroundColor: "#fff",
        zIndex: 10,
        height: 60,
      })}
    >
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
}
