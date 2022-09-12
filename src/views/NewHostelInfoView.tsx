/* eslint-disable no-throw-literal */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch } from "../app/hooks";
import { CustomButton, CustomInput } from "../components";
import { responseFail } from "../features/slice/ResponseReducer";
import { AddHostelThunk } from "../functions/post";
import HostelModel from "../model/HostelModel";

const initialHostelInfo: HostelModel = {
  hostelId: "hostelid",
  totalCapacity: 0,
  slotLeft: 0,
  price: 0,
  description: "",
  hostelName: "",
  totalBooked: 0,
  totalApproved: 0,
};

function ValidateHostelInfo(info: HostelModel) {
  if (info.hostelName.length <= 0) {
    throw "Enter Hostel Name";
  }
  if (info.price === 0) {
    throw "Please Enter Hostel Price";
  }
  if (info.totalCapacity === 0) {
    throw "Enter Hostel Capacity";
  }
}

interface IProps {
  open: boolean;
  handleClose: () => void;
}
export default function NewHostelInfoView({ open, handleClose }: IProps) {
  const [info, setInfo] = useState<HostelModel>(initialHostelInfo);
  const dispatch = useAppDispatch();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add School Hostel</DialogTitle>
      <DialogContent dividers>
        <CustomInput
          props={{
            value: info.hostelName,
            fullWidth: true,
            size: "small",
            onChange: (e) => setInfo({ ...info, hostelName: e.target.value }),
          }}
          label="Hostel Name"
        />
        <CustomInput
          props={{
            size: "small",
            value: info.totalCapacity === 0 ? "" : info.totalCapacity,
            fullWidth: true,

            type: "number",
            onChange: (e) =>
              setInfo({
                ...info,
                totalCapacity: !isNaN(parseInt(e.target.value))
                  ? parseInt(e.target.value)
                  : 0,
                slotLeft: !isNaN(parseInt(e.target.value))
                  ? parseInt(e.target.value)
                  : 0,
              }),
          }}
          label="Hostel Capacity"
        />
        <CustomInput
          props={{
            size: "small",
            value: info.slotLeft === 0 ? "" : info.slotLeft,
            fullWidth: true,

            type: "number",
            onChange: (e) =>
              setInfo({
                ...info,
                slotLeft: !isNaN(parseInt(e.target.value))
                  ? parseInt(e.target.value)
                  : 0,
              }),
          }}
          label="Available Slot"
        />
        <CustomInput
          props={{
            size: "small",
            value: info.price === 0 ? "" : info.price,
            fullWidth: true,
            type: "number",
            onChange: (e) =>
              setInfo({
                ...info,
                price: !isNaN(parseFloat(e.target.value))
                  ? parseFloat(e.target.value)
                  : 0,
              }),
          }}
          label="Hostel Price"
        />
        <CustomInput
          props={{
            size: "small",
            fullWidth: true,
            value: info.description,
            onChange: (e) => setInfo({ ...info, description: e.target.value }),
          }}
          label="Hostel Description"
        />

        <CustomButton
          variant="outlined"
          size="medium"
          title="Submit"
          handleClick={() => {
            try {
              ValidateHostelInfo(info);
              dispatch(AddHostelThunk(info));
              setInfo(initialHostelInfo);
            } catch (error) {
              dispatch(responseFail(error));
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
