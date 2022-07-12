import { Box, Grid } from "@mui/material";
import React from "react";
import { HostelCard } from "../../../views";

export default function HostelsPage() {
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
        {[1, 2, 3, 4, 5].map((index) => (
          <HostelCard key={index.toString()} />
        ))}
      </Grid>
    </Box>
  );
}
