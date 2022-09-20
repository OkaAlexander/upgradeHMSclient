import { Menu, MenuItem } from "@mui/material";
import React from "react";
import UserModel from "../../../model/UserModel";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleStatus: () => void;
  handleRole: () => void;
  user: UserModel | null;
}
export default function UserAccountAction({
  anchorEl,
  handleClose,
  handleRole,
  handleStatus,
  user,
}: IProps) {
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
      <MenuItem
        onClick={() => {
          handleClose();
          handleRole();
        }}
      >
        Change Role
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          handleStatus();
        }}
      >
        {Boolean(user?.status) ? "Disable" : "Activate"}
      </MenuItem>
      <MenuItem onClick={handleClose}>Cancel</MenuItem>
    </Menu>
  );
}
