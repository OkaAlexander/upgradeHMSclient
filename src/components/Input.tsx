import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent } from "react";

interface IProps {
  props?: TextFieldProps;
  label: string;
  handleChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export default function Input({ props, handleChange, label }: IProps) {
  return (
    <TextField
      label={label}
      onChange={handleChange}
      sx={{ margin: (theme) => theme.spacing(0, 1), minWidth: 200 }}
      {...props}
    />
  );
}
