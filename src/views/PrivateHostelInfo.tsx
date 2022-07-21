import { Box, Stack } from "@mui/material";
import React from "react";
import { CustomButton, CustomInput } from "../components";

export default function PrivateHostelInfo() {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(2),
        borderRadius: theme.spacing(0),
        width: "100%",
        overflow: "hidden",
      })}
    >
      <Stack
        spacing={1}
        sx={(theme) => ({ width: "100%", overflow: "hidden" })}
        direction="row"
      >
        <Box
          sx={(theme) => ({
            diplay: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: theme.spacing(1),
            flex: 1,
          })}
        >
          <CustomInput label="Hostel Name" />
          <CustomInput label="Hostel Price" props={{ type: "number" }} />
          <CustomInput label="Contact 1" />
          <CustomInput label="Contact 2" />
        </Box>

        <Box sx={(theme) => ({ padding: theme.spacing(1), flex: 1 })}>
          <CustomInput label="Contact 3" />
          <CustomInput label="Hostel Location" props={{ multiline: true }} />
          <CustomInput label="Hostel Description" props={{ multiline: true }} />
          <CustomButton
            variant="outlined"
            handleClick={() => {}}
            title="Hostel Image"
            size="medium"
          />
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(1),
            flex: 1,
          })}
        >
          <Box
            sx={(theme) => ({
              width: 200,
              height: 150,
              alignSelf: "center",
              boxShadow: theme.shadows[1],
              borderRadius: 0,
              background: "#f0f0f0",
            })}
          ></Box>
          <CustomButton
            handleClick={() => {}}
            size="medium"
            variant="contained"
            title="Submit"
          />
        </Box>
      </Stack>
    </Box>
  );
}
