import { HouseOutlined, TurnedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FcHome } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomTableCell,
  CustomTableRow,
  Input,
  MenuChipButton,
} from "../../../components";
import { AddHostelThunk } from "../../../functions/post";
import { GetHostelsThunk } from "../../../functions/thunk";
import HostelModel from "../../../model/HostelModel";
import { AddHostelMenu, CustomModal } from "../../../shared";
import {
  HostelInfoView,
  NewHostelInfoView,
  PrivateHostelInfoView,
  TableTemplate,
} from "../../../views";
import { HostelsTableHeader } from "../../data";

export default function HostelInfoPage() {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<HostelModel | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  const [hst, setHst] = useState<boolean>(true);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [hid, setHid] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    dispatch(GetHostelsThunk());
  }, []);

  function HandleAddUpdateHostel() {
    try {
      info && ValidateHostelInfo(info);
      dispatch(AddHostelThunk(info));
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    if (hid) {
      const h = hostels.find((host) => host.hostelId === hid);
      if (h) {
        setInfo(h);
      }
    } else {
      setInfo(null);
    }
  }, [hid]);

  return (
    <Box>
      <Box
        sx={(theme) => ({
          height: "50vh",
          background: theme.palette.action.hover,
          width: "100%",
          padding: theme.spacing(2),
          overflow: "auto",
        })}
      >
        <Container
          sx={(theme) => ({ height: "100%", overflow: "scroll" })}
          elevation={0}
          component={Paper}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={(theme) => ({
              width: "100%",
              heigth: "100%",
            })}
          >
            <Stack spacing={1} sx={(theme) => ({ height: "100%" })} flex={1}>
              <Typography textAlign="left" variant="body1">
                Manage University Hostel
              </Typography>
              <Divider />
              <Container>
                <Stack
                  sx={(theme) => ({
                    overflowY: "scroll",
                    border: `1px solid ${theme.palette.action.hover}`,
                    borderRadius: theme.spacing(0.5),
                    padding: theme.spacing(2),
                  })}
                  spacing={1}
                >
                  <Input
                    props={{
                      size: "small",
                      variant: "standard",
                      value: info ? info.hostelName : "",
                    }}
                    label="Hostel Name"
                  />
                  <Input
                    props={{
                      size: "small",
                      variant: "standard",
                      value: info ? info.totalCapacity.toString() : "",
                    }}
                    label="Hostel Capacity"
                  />
                  <Input
                    props={{
                      size: "small",
                      variant: "standard",
                      value: info ? info.slotLeft.toString() : "",
                    }}
                    label="Available Slots"
                  />
                  <Input
                    props={{
                      size: "small",
                      variant: "standard",
                      value: info ? info.price.toString() : "",
                    }}
                    label="Hostel Price"
                  />
                  <Input
                    props={{
                      size: "small",
                      variant: "standard",
                      value: info ? info.description : "",
                      multiline: true,
                      minRows: info && info.description ? 3 : 1,
                    }}
                    label="Hostel Description"
                  />
                  <Stack spacing={1} direction="row">
                    <Stack flex={1} alignItems="center" direction="row">
                      <Typography variant="body1">
                        Update Hostel Info
                      </Typography>
                      <Checkbox
                        onClick={() => setUpdate(!update)}
                        checked={update}
                      />
                    </Stack>
                    <Button size="small" variant="contained">
                      {update ? " Update Hostel" : "Add Hostel"}
                    </Button>
                  </Stack>
                </Stack>
              </Container>
            </Stack>
            <Box
              sx={(theme) => ({
                height: "100%",
                boderRight: "1px solid #d0d0d0",
              })}
            />
            <Stack flex={1}>
              <Typography variant="body1">Manage Private Hostels</Typography>
              <Divider />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Divider />
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            paddingY={1}
          ></Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            paddingY={1}
            spacing={1}
          >
            <Stack direction="row" alignItems="center">
              <FcHome />
              <Typography variant="body1">School</Typography>
              <Checkbox onClick={() => setHst(!hst)} checked={Boolean(hst)} />
            </Stack>
            <Stack direction="row" alignItems="center">
              <FcHome />
              <Typography variant="body1">Private</Typography>
              <Checkbox onClick={() => setHst(!hst)} checked={!Boolean(hst)} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container>
        <TableTemplate header={HostelsTableHeader}>
          {hostels.map((h, index) => (
            <CustomTableRow index={index} key={h.hostelId}>
              <React.Fragment>
                <CustomTableCell
                  props={{ align: "left" }}
                  content={h.hostelId}
                />
                <CustomTableCell
                  props={{ align: "left" }}
                  content={h.hostelName}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={h.totalCapacity.toString()}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={h.slotLeft.toString()}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={h.totalBooked.toString()}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={h.totalApproved.toString()}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={h.price.toString()}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={
                    <Checkbox
                      onClick={() => {
                        if (h.hostelId === hid) {
                          setHid(null);
                        } else {
                          setHid(h.hostelId);
                        }
                      }}
                      checked={Boolean(h.hostelId === hid)}
                    />
                  }
                />
              </React.Fragment>
            </CustomTableRow>
          ))}
        </TableTemplate>
      </Container>
    </Box>
  );
}

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

// <Box
//     sx={(theme) => ({
//       width: "100%",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "flex-start",
//     })}
//   >
//     <CustomModal
//       width={
//         Boolean(selection === "school")
//           ? 450
//           : Boolean(selection === "private")
//           ? "60%"
//           : 300
//       }
//       open={modal}
//       dark
//       handleClose={() => setModal(false)}
//       title="Register Hostel"
//     >
//       {/* {Boolean(selection === "school") ? (
//         <NewHostelInfoView
//           open={schoolHostel}
//           handleClose={() => setSchoolHostel(false)}
//         />
//       ) : Boolean(selection === "private") ? (
//         <PrivateHostelInfoView />
//       ) : (
//         <Box></Box>
//       )} */}
//     </CustomModal>

//     <NewHostelInfoView
//       open={schoolHostel}
//       handleClose={() => setSchoolHostel(false)}
//     />
//     <AddHostelMenu handleClose={handleClose} anchorEl={anchorEl} />
//     <Container
//       sx={(theme) => ({
//         padding: theme.spacing(1),
//         borderRadius: 0,
//         margin: theme.spacing(1, 0),
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "100%",
//         boxShadow: theme.shadows[1],
//       })}
//     >
//       <Box></Box>
//       <Box
//         sx={(theme) => ({
//           flex: 1,
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           padding: theme.spacing(0, 2),
//         })}
//       >
//         <MenuChipButton
//           title="Add Hostel"
//           Icon={HouseOutlined}
//           square
//           handleClick={handleClick}
//         />
//       </Box>
//     </Container>
//     <Box
//       sx={(theme) => ({
//         width: "100%",
//         paddingBottom: theme.spacing(4),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       })}
//     >
//       <Stack
//         direction={"row"}
//         sx={(theme) => ({
//           [theme.breakpoints.down("sm")]: {
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             width: "100%",
//             height: "100%",
//           },
//         })}
//       >
//         {hostels.map((hostel) => (
//           <HostelInfoView info={hostel} key={hostel.hostelId} />
//         ))}
//       </Stack>
//     </Box>
//   </Box>
