import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent, ReactNode } from "react";

interface IProps {
  label: string;
  children?: ReactNode;
  props?: TextFieldProps;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function CustomInput({
  label,
  children,
  props,
  handleChange,
}: IProps) {
  return (
    <TextField
      variant="outlined"
      onChange={handleChange}
      label={label}
      sx={(theme) => ({
        margin: theme.spacing(0.5, 0),
        width: "100%",
      })}
      {...props}
    >
      {children}
    </TextField>
  );
}
