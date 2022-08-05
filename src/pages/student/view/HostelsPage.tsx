import {
  Cancel,
  CancelOutlined,
  Check,
  CheckOutlined,
  CloseOutlined,
  Delete,
  Remove,
} from "@mui/icons-material";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomIconButton,
  Expanded,
  Row,
  SizedBox,
  SmallText,
} from "../../../components";
import BigText from "../../../components/Text";
import { appColors } from "../../../constants/colors";
import { StudentBookRoomThunk } from "../../../functions/post";
import { GetHostelsThunk } from "../../../functions/thunk";
import HostelModel from "../../../model/HostelModel";
import StudentModel from "../../../model/StudentModel";
import { HostelCard } from "../../../views";
import ConfirmationModalView from "../../../views/ConfirmationModalView";
import { InitialBookingInfo } from "../data";

export default function HostelsPage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [selectedHostel, setSelectedHostel] = useState<HostelModel | null>(
    null
  );
  const { student } = useAppSelector((state) => state.StudentReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  useEffect(() => {
    dispatch(GetHostelsThunk());
  }, []);

  useEffect(() => {
    !student ? navigation("/") : student.hostelId && navigation("../profile");
  }, [student]);

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
      <ConfirmationModalView
        open={confirmationModal}
        handleClose={() => setConfirmationModal(!confirmationModal)}
        title="Book Hostel"
        message="Do you want to book this Hostel?"
        handleResponse={(event) => {
          const status = event;
          if (status && student) {
            student.hostelId = selectedHostel ? selectedHostel.hostelId : "";
            student.indexNumber = student.indexNumber
              ? student.indexNumber
              : "";
            dispatch(StudentBookRoomThunk(student));
          }
          setConfirmationModal(!confirmationModal);
        }}
      />
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
          <HostelCard
            handleBook={() => {
              setSelectedHostel(hostel);
              setConfirmationModal(!confirmationModal);
            }}
            info={hostel}
            key={hostel.hostelId.toString()}
          />
        ))}
      </Grid>
    </Box>
  );
}
