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
  handleResponse: (response: boolean) => void;
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
            onClick={() => handleResponse(true)}
            id="yes"
            sx={(theme) => ({
              flex: 0.85,
              color: appColors.blue,
              borderColor: appColors.blue,
            })}
            variant="outlined"
            size="small"
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              })}
            >
              <Check />
              <SizedBox width={1} />
              <SmallText color={appColors.blue} text="Yes" />
            </Box>
          </Button>
          <Expanded />
          <Button
            onClick={() => handleResponse(false)}
            id="no"
            sx={(theme) => ({
              flex: 0.85,
              color: "firebrick",
              borderColor: "firebrick",
            })}
            variant="outlined"
            size="small"
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              })}
            >
              <CloseOutlined />
              <SizedBox width={1} />

              <SmallText color="firebrick" text="No" />
            </Box>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
