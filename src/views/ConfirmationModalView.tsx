import { Check, CloseOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { MdInfoOutline } from "react-icons/md";
import { CustomIconButton, Expanded, SizedBox, SmallText } from "../components";
import BigText from "../components/Text";
import { appColors } from "../constants/colors";

interface IProps {
  open: boolean;
  title: string;
  message: string;
  handleClose?: () => void;
  handleResponse: () => void;
}
export default function ConfirmationModalView({
  open,
  handleClose,
  handleResponse,
  message,
  title,
}: IProps) {
  return (
    <Modal
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
      open={open}
    >
      <Box
        sx={(theme) => ({
          background: theme.palette.common.white,
          width: "400px",
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 1.5),
          })}
        >
          <MdInfoOutline />
          <BigText text={title} />
          <Expanded />
          <CustomIconButton handleClick={handleClose} Icon={CloseOutlined} />
        </Box>
        <Divider />
        <Box>
          <Typography
            sx={(theme) => ({
              padding: theme.spacing(2),
              textAlign: "center",
            })}
            variant="body2"
          >
            {message}
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={(theme) => ({
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          })}
        >
          <Button
            onClick={handleResponse}
            id="yes"
            sx={(theme) => ({
              flex: 0.85,
              color: appColors.blue,
              borderColor: appColors.blue,
              height: "30px",
            })}
            variant="outlined"
            size="small"
          >
            Yes
          </Button>
          <Expanded />
          <Button
            onClick={handleClose}
            id="no"
            sx={(theme) => ({
              flex: 0.85,
              color: "firebrick",
              borderColor: "firebrick",
              height: "30px",
            })}
            variant="outlined"
            size="small"
          >
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
