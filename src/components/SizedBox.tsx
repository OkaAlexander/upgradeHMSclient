import { Box } from "@mui/material";
import React from "react";

interface IProps {
  width?: number;
  height?: number;
}
export default function SizedBox({ width, height }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(height ? height : 0, width ? width : 0),
      })}
    />
  );
}
