import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
  title: string;
  showTitle?: boolean;
  dark?: boolean;
  width?: any;
}
export default function CustomModal({
  children,
  open,
  handleClose,
  title,
  showTitle,
  dark,
  width,
}: IProps) {
  return (
    <Dialog open={open} sx={(theme) => ({ overflow: "hidden", width: "100%" })}>
      <Stack
        sx={(theme) => ({
          width: width ? width : 450,
          borderRadius: 0,
          boxShadow: theme.shadows[1],
          overflow: "hidden",
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: theme.spacing(1),
            background: dark ? theme.palette.primary.dark : "transparent",
            color: dark
              ? theme.palette.common.white
              : theme.palette.common.black,
          })}
        >
          <Box>
            <Typography variant="body1">{title}</Typography>
          </Box>
          <Box>
            <IconButton onClick={handleClose} color="secondary">
              <Close htmlColor="firebrick" />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box>{children}</Box>
      </Stack>
    </Dialog>
  );
}
