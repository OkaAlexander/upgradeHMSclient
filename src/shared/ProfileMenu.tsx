import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../app/hooks";
import { UserLogout } from "../features/slice/UserSlice";

interface IProps {
  open: boolean;
  anchorEl: HTMLDivElement | null;
  handleClose: () => void;
}
export default function ProfileMenu({ open, handleClose, anchorEl }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Menu open={open} anchorEl={anchorEl}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          dispatch(UserLogout());
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
}
