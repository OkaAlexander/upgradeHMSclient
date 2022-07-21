import { Box, Typography } from "@mui/material";
import React from "react";

export default function AboutPage() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "auto",
        paddingBottom: theme.spacing(1),
      })}
    >
      <Typography
        variant="body2"
        sx={(theme) => ({
          textAlign: "justify",
        })}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt animi
        eligendi quam consequatur, nesciunt officiis numquam est quis, nisi et
        laboriosam illum impedit ducimus sit placeat consequuntur doloribus
        alias, aliquid corporis temporibus officia! Dolorem voluptatem
        consequuntur temporibus? Quos, ab eos? Provident exercitationem nam
        ducimus nemo animi, aliquid repellendus vitae cum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Tempora odio odit quam nesciunt quis,
        soluta, necessitatibus omnis commodi facilis debitis facere porro
        repellat! Illo cum ipsam officiis praesentium, magnam porro minus magni
        asperiores consectetur recusandae neque voluptas eos cumque, fugiat
        quaerat libero voluptatem nemo corrupti ratione exercitationem impedit
        facere iste.
      </Typography>
    </Box>
  );
}
