import { MoreVertOutlined } from "@mui/icons-material";
import { Box, Container, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomIconButton,
  CustomInput,
  CustomTableCell,
  CustomTableRow,
  Input,
  SizedBox,
} from "../../../components";
import FlatIcons from "../../../constants/icons";
import {
  GetHostelsThunk,
  GetRoomsThunk,
  RoomThunk,
} from "../../../functions/thunk";
import RoomModel from "../../../model/RoomModel";
import { PageHeader } from "../../../shared";
import { TableTemplate } from "../../../views";
import { RoomsTableHeader } from "../../data";
import { GetHostelInfoById } from "../../service";
import { ManageRoomMenu } from "../components";

export default function ManageRoomInfoPage() {
  const dispatch = useAppDispatch();
  const [room, setRoom] = useState<RoomModel | null>(null);
  const [edit, setEdit] = useState<HTMLElement | null>(null);
  const { rooms } = useAppSelector((state) => state.RoomsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [Rooms, setRooms] = useState<RoomModel[]>([]);
  const [filter, setFilter] = useState<{ hostel: string; room: string }>({
    hostel: "",
    room: "",
  });

  useEffect(() => {
    setRooms(rooms);
  }, []);

  function handleFilter() {
    Boolean(filter.hostel.length) &&
      setRooms(rooms.filter((r) => r.hostelId === filter.hostel));
    Boolean(filter.room.length) &&
      setRooms(rooms.filter((r) => r.roomNumber === filter.room));
  }

  useEffect(() => {
    setRooms(rooms);
  }, [rooms]);

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
    >
      <ManageRoomMenu
        room={room}
        anchorEl={edit}
        handleClose={() => {
          setEdit(null);
          setRoom(null);
        }}
        handleStatus={(status) => {
          if (room) {
            dispatch(
              RoomThunk({
                url: "room/update",
                method: "put",
                data: { ...room, roomStatus: status },
              })
            );
          }
          setRoom(null);
          setEdit(null);
        }}
      />
      <PageHeader title="Manage Rooms">
        <>
          <CustomInput
            label="Hostel"
            props={{
              variant: "outlined",
              size: "small",
              select: true,
              onKeyDown: (e) => {
                e.key === "Enter" && handleFilter();
              },
              onChange: (e) => setFilter({ ...filter, hostel: e.target.value }),
            }}
          >
            {hostels.map((h) => (
              <MenuItem value={h.hostelId} key={h.hostelId}>
                {h.hostelName}
              </MenuItem>
            ))}
          </CustomInput>
          <SizedBox width={1} />
          <Input
            label="Room"
            props={{
              variant: "outlined",
              size: "small",
              value: filter.room,
              onKeyDown: (e) => {
                e.key === "Enter" && handleFilter();
              },
              onChange: (e) =>
                setFilter({ ...filter, room: e.target.value.toUpperCase() }),
            }}
          />
          <SizedBox width={1} />
          <CustomIconButton
            handleClick={handleFilter}
            Icon={FlatIcons.FcSearch}
          />
        </>
      </PageHeader>
      <Container>
        <TableTemplate header={RoomsTableHeader}>
          {Rooms.map((r, index) => (
            <CustomTableRow index={index}>
              <>
                <CustomTableCell
                  props={{ align: "left" }}
                  content={GetHostelInfoById(hostels, r.hostelId).hostelName}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={r.roomNumber}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={r.roomGender}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={r.roomCapacity}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={r.roomSize}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={r.roomStatus}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={
                    <CustomIconButton
                      handleClick={(e) => {
                        setRoom(r);
                        setEdit(e.currentTarget);
                      }}
                      Icon={MoreVertOutlined}
                    />
                  }
                />
              </>
            </CustomTableRow>
          ))}
        </TableTemplate>
      </Container>
    </Box>
  );
}
