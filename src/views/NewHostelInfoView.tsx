import { Box, Stack } from "@mui/material";
import React from "react";
import { CustomButton, CustomInput } from "../components";

export default function NewHostelInfoView() {
  return (
    <Stack
      spacing={1.5}
      sx={(theme) => ({
        padding: theme.spacing(1.5, 2.5),
        margin: theme.spacing(0.5, 0),
      })}
    >
      <CustomInput label="Hostel Name" />
      <CustomInput label="Hostel Capacity" type="number" />
      <CustomInput label="Available Slot" type="number" />
      <CustomInput label="Hostel Price" type="number" />
      <CustomInput label="Hostel Description" multiline />

      <CustomButton
        variant="outlined"
        size="medium"
        title="Submit"
        handleClick={() => {}}
      />
    </Stack>
  );
}
