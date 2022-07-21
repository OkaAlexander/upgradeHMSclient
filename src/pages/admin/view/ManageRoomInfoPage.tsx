import { Box, Container, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
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
import { GetHostelsThunk, GetRoomsThunk } from "../../../functions/thunk";
import { PageHeader } from "../../../shared";
import { TableTemplate } from "../../../views";
import { RoomsTableHeader } from "../../data";

export default function ManageRoomInfoPage() {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector((state) => state.RoomsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);

  useEffect(() => {
    // dispatch(GetRoomsThunk());
    // dispatch(GetHostelsThunk());
  }, []);
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
      <PageHeader title="Manage Rooms">
        <>
          <Input
            label="Hostel"
            props={{ variant: "outlined", size: "small" }}
          />
          <SizedBox width={1} />
          <Input label="Room" props={{ variant: "outlined", size: "small" }} />
          <SizedBox width={1} />
          <CustomIconButton Icon={FlatIcons.FcSearch} />
        </>
      </PageHeader>
      <Container>
        <TableTemplate header={RoomsTableHeader}>
          {rooms.map((r, index) => (
            <CustomTableRow index={index}>
              <>
                <CustomTableCell
                  props={{ align: "left" }}
                  content={r.hostelId}
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
                  content={<CustomIconButton Icon={FlatIcons.FcExpand} />}
                />
              </>
            </CustomTableRow>
          ))}
        </TableTemplate>
      </Container>
    </Box>
  );
}
