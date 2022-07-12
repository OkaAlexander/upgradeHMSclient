import { TextField } from "@mui/material";
import React from "react";

interface IProps {
  label: string;
}
export default function FormInput({ label }: IProps) {
  return (
    <TextField
      label={label}
      sx={{ margin: (theme) => theme.spacing(0.5, 0) }}
      variant="outlined"
      size="small"
      fullWidth
    />
  );
}
