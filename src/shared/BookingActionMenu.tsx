import { Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: (res: number) => void;
}
export default function BookingActionMenu({ anchorEl, handleClose }: IProps) {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
      <MenuItem onClick={() => handleClose(1)}>Approve</MenuItem>
      <MenuItem onClick={() => handleClose(-1)}>Decline</MenuItem>
      <MenuItem onClick={() => handleClose(0)}>Cancel</MenuItem>
    </Menu>
  );
}
