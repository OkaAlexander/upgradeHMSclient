import { TextField, TextFieldProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  label: string;
  children?: ReactNode;
  props?: TextFieldProps;
}
export default function CustomInput({ label, children, props }: IProps) {
  return (
    <TextField
      variant="outlined"
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
