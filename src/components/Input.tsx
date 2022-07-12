import { TextField } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler } from "react";

interface IProps {
  placeholder?: string;
  label: string;
  handleChange: (e: string) => void;
  variant?: any;
  type?: any;
}
export default function Input({
  placeholder,
  handleChange,
  label,
  variant,
  type,
}: IProps) {
  return (
    <TextField
      variant={variant ? variant : "outlined"}
      placeholder={placeholder}
      label={label}
      type={type ? type : "text"}
      size="small"
      onChange={(e) => handleChange(e.target.value)}
      sx={{ margin: (theme) => theme.spacing(0, 1), minWidth: 200 }}
    />
  );
}
