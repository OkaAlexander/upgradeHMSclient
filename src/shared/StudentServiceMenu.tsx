import { Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  anchorlEl: HTMLElement | null;
  handleClose: () => void;
}
export default function StudentServiceMenu({ anchorlEl, handleClose }: IProps) {
  return (
    <Menu open={Boolean(anchorlEl)} anchorEl={anchorlEl}>
      <MenuItem onClick={handleClose}>Export</MenuItem>
      <MenuItem onClick={handleClose}>ID Cards</MenuItem>
    </Menu>
  );
}
