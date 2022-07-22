import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { InitLogout } from "../../../../features/slice/StudentReducer";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
export default function AccountMenu({ handleClose, anchorEl }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
      <MenuItem
        onClick={() => {
          handleClose();
        }}
      >
        Id Card
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          dispatch(InitLogout());
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
}
