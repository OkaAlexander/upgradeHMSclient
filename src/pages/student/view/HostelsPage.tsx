import {
  Cancel,
  CancelOutlined,
  Check,
  CheckOutlined,
  CloseOutlined,
  Delete,
  Remove,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { hostname } from "os";
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
import { GetPrivateHostelsThunk } from "../../../functions/get";
import { StudentBookRoomThunk } from "../../../functions/post";
import { GetHostelsThunk } from "../../../functions/thunk";
import HostelModel from "../../../model/HostelModel";
import StudentModel from "../../../model/StudentModel";
import { HostelCard } from "../../../views";
import ConfirmationModalView from "../../../views/ConfirmationModalView";
import { InitialStudentInfo } from "../../admin/data";
import { InitialBookingInfo } from "../data";
import { PrivateHostelCard } from "../views/frontend";

export default function HostelsPage() {
  const dispatch = useAppDispatch();
  const { privateHostels } = useAppSelector(
    (state) => state.PrivateHostelReducer
  );
  const navigation = useNavigate();
  const [selectedHostel, setSelectedHostel] = useState<HostelModel | null>(
    null
  );
  const { student } = useAppSelector((state) => state.StudentReducer);
  const [info, setInfo] = useState<StudentModel>(InitialStudentInfo);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  useEffect(() => {
    dispatch(GetHostelsThunk());
    dispatch(GetPrivateHostelsThunk());
  }, []);

  useEffect(() => {
    student && student.hostelId && navigation("/dashboard/profile");
    !student && navigation("/");
    if (student) {
      setInfo({ ...student });
    }
  }, [navigation, student]);

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
        handleResponse={() => {
          info.hostelId = selectedHostel ? selectedHostel.hostelId : "";
          dispatch(StudentBookRoomThunk(info));
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
        {Boolean(privateHostels.length > 0) &&
        Boolean(privateHostels[privateHostels.length - 1].status)
          ? privateHostels.map((ph) => (
              <PrivateHostelCard key={ph.id} info={ph} />
            ))
          : hostels.map((hostel) => (
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
