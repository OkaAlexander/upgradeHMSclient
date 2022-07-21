import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  props?: TypographyProps;
}
export default function BigText({ text, props }: IProps) {
  return (
    <Typography variant="body1" {...props}>
      {text}
    </Typography>
  );
}
