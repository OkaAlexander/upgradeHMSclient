import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode[];
  padding?: { x: number; y: number };
}
export default function Row({ children, padding }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: theme.spacing(
          padding ? padding.y : 0,
          padding ? padding.x : 0
        ),
      })}
    >
      {children.map((child) => child)}
    </Box>
  );
}
