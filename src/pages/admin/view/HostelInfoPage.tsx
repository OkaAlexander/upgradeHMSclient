import { HouseOutlined } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { MenuChipButton } from "../../../components";
import { GetHostelsThunk } from "../../../functions/thunk";
import { AddHostelMenu, CustomModal } from "../../../shared";
import {
  HostelInfoView,
  NewHostelInfoView,
  PrivateHostelInfoView,
} from "../../../views";

export default function HostelInfoPage() {
  const dispatch = useAppDispatch();
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [modal, setModal] = useState<boolean>(false);
  const [selection, setSelection] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (hostel: string) => {
    setSelection(hostel);
    setModal(true);
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(GetHostelsThunk());
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
      <CustomModal
        width={
          Boolean(selection === "school")
            ? 450
            : Boolean(selection === "private")
            ? "60%"
            : 300
        }
        open={modal}
        dark
        handleClose={() => setModal(false)}
        title="Register Hostel"
      >
        {Boolean(selection === "school") ? (
          <NewHostelInfoView />
        ) : Boolean(selection === "private") ? (
          <PrivateHostelInfoView />
        ) : (
          <Box></Box>
        )}
      </CustomModal>
      <AddHostelMenu handleClose={handleClose} anchorEl={anchorEl} />
      <Container
        sx={(theme) => ({
          padding: theme.spacing(1),
          borderRadius: 0,
          margin: theme.spacing(1, 0),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          boxShadow: theme.shadows[1],
        })}
      >
        <Box></Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 2),
          })}
        >
          <MenuChipButton
            title="Add Hostel"
            Icon={HouseOutlined}
            square
            handleClick={handleClick}
          />
        </Box>
      </Container>
      <Box
        sx={(theme) => ({
          width: "100%",
          paddingBottom: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <Stack
          direction={"row"}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
            },
          })}
        >
          {hostels.map((hostel) => (
            <HostelInfoView info={hostel} key={hostel.hostelID} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
