import { ChipTypeMap, Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  open: boolean;
  anchorEl: HTMLDivElement | null;
  handleClose: () => void;
}
export default function ProfileMenu({ open, handleClose, anchorEl }: IProps) {
  return (
    <Menu open={open} anchorEl={anchorEl}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
}
