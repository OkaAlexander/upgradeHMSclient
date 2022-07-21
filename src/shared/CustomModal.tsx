import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  Divider,
  IconButton,
  Modal,
  Stack,
  StackProps,
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
  props?: StackProps;
}
export default function CustomModal({
  children,
  open,
  handleClose,
  title,
  showTitle,
  dark,
  width,
  props,
}: IProps) {
  return (
    <Modal
      open={open}
      sx={(theme) => ({
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        outline: "none",
        borderStyle: "none",
      })}
    >
      <Stack
        sx={(theme) => ({
          width: width ? width : 450,
          borderRadius: 0,
          boxShadow: theme.shadows[1],
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          alignSelf: "center",
          height: "100%",
          outline: "none",
          borderStyle: "none",
        })}
        {...props}
      >
        <Box
          sx={(theme) => ({
            background: theme.palette.common.white,
            width: "100%",
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
          <Box
            sx={(theme) => ({
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              width: "100%",
            })}
          >
            {children}
          </Box>
        </Box>
      </Stack>
    </Modal>
  );
}
