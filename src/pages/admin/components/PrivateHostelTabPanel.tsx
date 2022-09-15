import { Checkbox, Stack, Typography } from "@mui/material";
import React, { useState, ChangeEvent, useEffect } from "react";
import { PostRoutes } from "../../../api";
import { useAppDispatch } from "../../../app/hooks";
import { CustomButton, Input, SizedBox } from "../../../components";
import { responseFail } from "../../../features/slice/ResponseReducer";
import { AddPrivateHostelThunk } from "../../../functions/post";
import PrivateHostelModel, {
  InitialPrivateHostelInfo,
} from "../../../model/PrivateHostelModel";
import ConfirmationModalView from "../../../views/ConfirmationModalView";

interface IProps {
  value: number;
  index: number;
  privateHostel: PrivateHostelModel | null;
}
export default function PrivateHostelTabPanel({
  value,
  index,
  privateHostel,
}: IProps) {
  const dispatch = useAppDispatch();
  const [update, setUpdate] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<PrivateHostelModel>(
    InitialPrivateHostelInfo
  );
  const [del, setDel] = useState<boolean>(false);
  function HandleSubmit() {
    try {
      ValidateHostelInfo(info);
      const form = new FormData();
      if (!update) {
        info.id = "privatehostel";
      }
      form.append("hostelName", info.hostelName);
      form.append("location", info.location);
      form.append("id", info.id);
      form.append("description", info.description);
      form.append("contact1", info.contact1);
      form.append("contact2", info.contact2);
      form.append("price", info.price.toString());
      form.append("file", file as any);
      form.append("status", info.status.toString());
      form.append("image", "image");
      //
      dispatch(
        AddPrivateHostelThunk({
          data: form,
          route: update
            ? PostRoutes.private_hostel_update
            : PostRoutes.private_hostel_add,
          file: true,
        })
      );
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  function HandleDelete() {
    setDel(false);
    dispatch(
      AddPrivateHostelThunk({
        data: info,
        route: PostRoutes.private_hostel_delete,
      })
    );
  }

  useEffect(() => {
    privateHostel ? setInfo(privateHostel) : setInfo(InitialPrivateHostelInfo);
  }, [privateHostel]);

  if (value === index) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        padding={1}
        width={"100%"}
        spacing={1.5}
        direction="row"
      >
        <ConfirmationModalView
          title="Delete Hostel"
          message={`Do you want to delete ${info.hostelName}?`}
          open={del}
          handleResponse={HandleDelete}
          handleClose={() => setDel(false)}
        />
        <Stack spacing={1} alignItems="center" flex={1}>
          <Input
            props={{
              size: "small",
              fullWidth: true,
              value: info.hostelName,
              onChange: (e) => setInfo({ ...info, hostelName: e.target.value }),
            }}
            label="Hostel Name"
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              value: info.location,
              onChange: (e) => setInfo({ ...info, location: e.target.value }),
            }}
            label="Address"
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              value: info.price > 0 ? info.price.toString() : "",
              type: "number",
              onChange: (e) =>
                setInfo({ ...info, price: parseFloat(e.target.value) }),
            }}
            label="Price"
          />
        </Stack>
        <Stack spacing={1} alignItems="center" flex={1}>
          <Input
            label="Description"
            props={{
              size: "small",
              multiline: true,
              fullWidth: true,
              value: info.description,
              onChange: (e) =>
                setInfo({ ...info, description: e.target.value }),
            }}
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              value: info.contact1,
              onChange: (e) => setInfo({ ...info, contact1: e.target.value }),
            }}
            label="Contact1*"
          />
          <Input
            props={{
              size: "small",
              fullWidth: true,
              value: info.contact2,
              onChange: (e) => setInfo({ ...info, contact2: e.target.value }),
            }}
            label="Contact2"
          />
        </Stack>
        <Stack flex={1} alignItems="center" spacing={1}>
          <Input
            label=""
            props={{
              size: "small",
              type: "file",
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files !== null) {
                  setFile(e.target.files[0]);
                }
              },
            }}
          />
          <Stack direction="row" alignItems="center" width={"100%"}>
            <Typography variant="body1">Update</Typography>
            <Checkbox onChange={() => setUpdate(!update)} checked={update} />
            <CustomButton
              handleClick={HandleSubmit}
              size="small"
              title={update ? "Update" : "Submit"}
            />
            <SizedBox width={1} />
            {update && (
              <CustomButton
                props={{ color: "secondary" }}
                size="small"
                variant="outlined"
                title="Delete"
                handleClick={() => setDel(true)}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  } else {
    return null;
  }
}

function ValidateHostelInfo(info: PrivateHostelModel) {
  if (info.hostelName.length <= 0) {
    throw "Hostel Name Required";
  }
  if (info.location.length <= 0) {
    throw "Hostel Location / Address Required";
  }
  if (info.description.length <= 0) {
    throw "Hostel Description Required";
  }
  if (info.price <= 0) {
    throw "Hostel Price Required";
  }
  if (info.contact1.length <= 0) {
    throw "Contact Line Required";
  }
}
