import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  color?: string;
  text: string;
  fontsize?: number;
}
export default function BigText({ color, text, fontsize }: IProps) {
  return (
    <Typography
      variant="body1"
      sx={(theme) => ({
        fontSize: theme.spacing(fontsize ? fontsize : 2.5),
        color: color ? color : theme.palette.common.black,
      })}
    >
      {text}
    </Typography>
  );
}
