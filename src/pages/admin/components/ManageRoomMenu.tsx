import { Menu, MenuItem } from "@mui/material";
import React from "react";
import RoomModel from "../../../model/RoomModel";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleStatus: (status: string) => void;
  room: RoomModel | null;
}
export default function ManageRoomMenu({
  anchorEl,
  handleClose,
  handleStatus,
  room,
}: IProps) {
  return (
    <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
      {room && (
        <MenuItem
          onClick={() =>
            handleStatus(
              room.roomStatus === "available" ? "unavailable" : "available"
            )
          }
        >
          {room?.roomStatus === "available" ? "Disable" : "Enable"}
        </MenuItem>
      )}
    </Menu>
  );
}
