import { Stack, Typography } from "@mui/material";
import React from "react";

interface IProps {
  error?: any;
  message?: any;
}
export default function ResponseDisplay({ error, message }: IProps) {
  if (Boolean(error || message)) {
    return (
      <Stack alignItems="center" justifyContent="center" padding={1}>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        {message && (
          <Typography variant="body2" color="seagreen">
            {message}
          </Typography>
        )}
      </Stack>
    );
  } else {
    return null;
  }
}
