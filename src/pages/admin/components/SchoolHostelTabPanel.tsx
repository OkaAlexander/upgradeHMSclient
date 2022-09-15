import { Checkbox, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { CustomButton, Input } from "../../../components";
import { responseFail } from "../../../features/slice/ResponseReducer";
import { AddHostelThunk, UpdateHostelInfoThunk } from "../../../functions/post";
import HostelModel, { InitialHostelInfo } from "../../../model/HostelModel";

interface IProps {
  value: number;
  index: number;
  selectedHostel: HostelModel | null;
}
export default function SchoolHostelTabPanel({
  index,
  value,
  selectedHostel,
}: IProps) {
  const [update, setUpdate] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<HostelModel>(InitialHostelInfo);

  useEffect(() => {
    selectedHostel ? setInfo(selectedHostel) : setInfo(InitialHostelInfo);
  }, [selectedHostel]);
  function HandleSubmit() {
    try {
      ValidateHostelInfo(info);
      if (!update) {
        info.hostelId = "NH02";
      }
      !update
        ? dispatch(AddHostelThunk(info))
        : dispatch(UpdateHostelInfoThunk(info));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }
  if (value === index) {
    return (
      <Stack
        padding={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        spacing={1.5}
      >
        <Stack flex={1} spacing={1} alignItems="center">
          <Input
            props={{
              size: "small",
              fullWidth: true,
              onChange: (e) => setInfo({ ...info, hostelName: e.target.value }),
              value: info.hostelName.toString(),
            }}
            label="Hostel Name"
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              type: "number",
              onChange: (e) =>
                setInfo({
                  ...info,
                  totalCapacity: parseInt(e.target.value),
                  slotLeft: parseInt(e.target.value),
                }),
              value:
                info.totalCapacity > 0 ? info.totalCapacity.toString() : "",
            }}
            label="Hostel Capacity"
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              type: "number",
              onChange: (e) => {
                !update &&
                  setInfo({ ...info, slotLeft: parseInt(e.target.value) });
              },
              value: info.slotLeft > 0 ? info.slotLeft.toString() : "",
            }}
            label="Slots Available"
          />
        </Stack>
        <Stack flex={1} spacing={1} alignItems="center">
          <Input
            props={{
              size: "small",
              fullWidth: true,
              type: "number",
              onChange: (e) =>
                setInfo({ ...info, price: parseFloat(e.target.value) }),
              value: info.price > 0 ? info.price.toString() : "",
            }}
            label="Hostel Price"
          />
          <Input
            props={{
              size: "small",
              multiline: true,
              minRows: 1.25,
              fullWidth: true,
              value: info.description,
              onChange: (e) =>
                setInfo({ ...info, description: e.target.value }),
            }}
            label="Hostel Description"
          />
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={1}
            alignItems="center"
            width="100%"
          >
            <Typography variant="body1">Update</Typography>
            <Checkbox onChange={() => setUpdate(!update)} checked={update} />
            <CustomButton
              handleClick={HandleSubmit}
              title={update ? "Update" : "Submit"}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  } else {
    return null;
  }
}

function ValidateHostelInfo(info: HostelModel) {
  if (info.hostelName.length <= 0) {
    throw "Hostel Name Required";
  }
  if (info.totalCapacity === 0 || info.totalCapacity < 0) {
    throw "Invalid Hostel Capacity";
  }
  if (info.price === 0 || info.price < 0) {
    throw "Invalid Hostel Price";
  }
}
