import { Button, ButtonProps } from "@mui/material";
import React, { MouseEvent } from "react";

interface IProps {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  percentage?: number;
  size?: any;
  variant?: any;
  props?: ButtonProps;
}
export default function CustomButton({
  title,
  handleClick,
  variant,
  size,
  percentage,
  props,
}: IProps) {
  return (
    <Button
      sx={(theme) => ({
        width: percentage ? `${percentage}%` : "100%",
        margin: theme.spacing(0.5, 0),
      })}
      onClick={handleClick}
      variant={variant ? variant : "contained"}
      size={size ? size : "small"}
      {...props}
    >
      {title}
    </Button>
  );
}
