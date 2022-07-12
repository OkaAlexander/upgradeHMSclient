import { TextField } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  label: string;
  select?: boolean;
  medium?: boolean;
  type?: any;
  multiline?: boolean;
  children?: ReactNode;
}
export default function CustomInput({
  label,
  select,
  medium,
  type,
  multiline,
  children,
}: IProps) {
  return (
    <TextField
      variant="outlined"
      size={medium ? "medium" : "small"}
      label={label}
      select={select ? true : false}
      type={type ? type : "text"}
      multiline={Boolean(multiline)}
      sx={(theme) => ({
        margin: theme.spacing(0.5, 0),
        width: "100%",
      })}
    >
      {children}
    </TextField>
  );
}
