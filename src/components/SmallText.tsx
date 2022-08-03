import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IProps {
  color?: string;
  text: string;
  fontsize?: number;
  props?: TypographyProps;
}
export default function SmallText({ color, text, fontsize, props }: IProps) {
  return (
    <Typography
      variant="body2"
      sx={(theme) => ({
        fontSize: theme.spacing(fontsize ? fontsize : 2),
        color: color ? color : theme.palette.common.black,
      })}
      {...props}
    >
      {text}
    </Typography>
  );
}
