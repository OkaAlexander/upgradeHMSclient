import { Box } from "@mui/material";
import React from "react";

interface IProps {
  color?: string;
}
export default function CustomDivider({ color }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        border: `0.25px solid ${color ? color : "rgba(211,211,211,0.5)"}`,
        width: "100%",
        zIndex: 1010,
      })}
    />
  );
}
