import { Box, Container, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CustomInput } from "../../../components";
import { GetHostelsThunk, GetRoomsThunk } from "../../../functions/thunk";

export default function ManageRoomInfoPage() {
  const dispatch = useAppDispatch();
  const { rooms } = useAppSelector((state) => state.RoomsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);

  useEffect(() => {
    dispatch(GetRoomsThunk());
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
      <Container>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: theme.spacing(1),
            border: "1px solid #d0d0d0",
            borderRadius: theme.spacing(0.5),
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
            marginTop: theme.spacing(3.5),
          })}
        >
          <Box
            sx={(theme) => ({
              width: "250px",
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput label="Hostel" select>
              <React.Fragment>
                {hostels.map((hostel) => (
                  <MenuItem value={hostel.HostelID}>
                    {hostel.HostelName}
                  </MenuItem>
                ))}
              </React.Fragment>
            </CustomInput>
          </Box>

          <Box
            sx={(theme) => ({
              width: "150px",
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput select label="Room Number" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
