import { Button } from "@mui/material";
import React from "react";

interface IProps {
  handleClick: () => void;
  title: string;
  percentage?: number;
  size?: any;
  variant?: any;
}
export default function CustomButton({
  title,
  handleClick,
  variant,
  size,
  percentage,
}: IProps) {
  return (
    <Button
      sx={(theme) => ({
        width: percentage ? `${percentage}%` : "100%",
        margin: theme.spacing(0.5, 0),
      })}
      variant={variant ? variant : "contained"}
      size={size ? size : "small"}
    >
      {title}
    </Button>
  );
}
