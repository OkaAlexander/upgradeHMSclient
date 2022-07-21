import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { InitLogout } from "../../../../features/slice/StudentReducer";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
export default function MobileMenu({ anchorEl, handleClose }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
      <MenuItem
        onClick={() => {
          handleClose();
        }}
      >
        Shop
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
        }}
      >
        About
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          dispatch(InitLogout());
        }}
      >
        LogOut
      </MenuItem>
    </Menu>
  );
}
