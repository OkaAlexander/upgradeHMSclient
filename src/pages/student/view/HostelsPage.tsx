import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetHostelsThunk } from "../../../functions/thunk";
import { HostelCard } from "../../../views";

export default function HostelsPage() {
  const dispatch = useAppDispatch();
  const { hostels } = useAppSelector((state) => state.HostelsReducer);

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
        padding: theme.spacing(1.25),
        margin: theme.spacing(1, 0),
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        paddingBottom: theme.spacing(5),
      })}
    >
      <Grid
        container
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        {hostels.map((hostel) => (
          <HostelCard info={hostel} key={hostel.hostelId.toString()} />
        ))}
      </Grid>
    </Box>
  );
}
