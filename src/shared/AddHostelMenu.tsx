import { Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  anchorEl: HTMLDivElement | null;
  handleClose: (hostel: string) => void;
}
export default function AddHostelMenu({ handleClose, anchorEl }: IProps) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem id="school" onClick={() => handleClose("school")}>
        School
      </MenuItem>
      <MenuItem id="private" onClick={() => handleClose("private")}>
        Private
      </MenuItem>
    </Menu>
  );
}
