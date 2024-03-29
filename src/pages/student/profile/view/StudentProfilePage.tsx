import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { FcDepartment, FcDownload, FcReading } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { SizedBox, Text } from "../../../../components";
import { ExportToPdf } from "../../../../shared";
import { GetHostelInfoById } from "../../../service";
import { AddComplainView } from "../../view";
import pdfGenerator from "../../../../generatePdf/TenancyAgreement";
import { FcCallback, FcImport, FcAssistant } from "react-icons/fc";
import TenancyAgreement from "../../../../shared/GenerateTanancy";
import TenancyAgreenmentNewHostel from "../../../../shared/TenancyAgreenmentNewHostel";
import {
  responseFail,
  responsePending,
  responseSuccess,
} from "../../../../features/slice/ResponseReducer";
import { Controller } from "../../../../controller";
import StudentModel from "../../../../model/StudentModel";
import { setStudent } from "../../../../features/slice/StudentReducer";
export default function StudentProfilePage() {
  const { student } = useAppSelector((state) => state.StudentReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [addComplain, setAddComplain] = useState<boolean>(false);
  const pdfRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  async function getDetails() {
    try {
      dispatch(responsePending());
      const info = await Controller<StudentModel | null>({
        method: "post",
        url: "student/id",
        data: { id: student?.referenceNumber },
      });
      info && dispatch(setStudent(info));
      dispatch(responseSuccess(null));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container
      sx={(theme) => ({
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        paddingBottom: "100px",
      })}
    >
      <AddComplainView
        open={addComplain}
        handleClose={() => setAddComplain(false)}
      />
      <Box
        sx={(theme) => ({
          width: "100%",
          padding: theme.spacing(1.5),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
          margin: theme.spacing(1.5, 0),
        })}
      >
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            paddingX={2}
          >
            {student && Boolean(student.roomNumber) ? (
              <Stack display="flex">
                <Typography
                  variant="body1"
                  marginLeft="6%"
                >{`Room:${student.roomNumber}`}</Typography>
                {/* <Chip
                  onClick={() => {}}
                  sx={(theme) => ({
                    borderRadius: 0,
                    borderStyle: "none",
                  })}
                  variant="outlined"
                  size="small"
                  label="Room Members"
                />  */}
              </Stack>
            ) : (
              <Typography variant="body1" color="error">
                Booking Pending
              </Typography>
            )}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            paddingX={2}
          >
            <FcDepartment />
            <Typography variant="body1">
              {student &&
                GetHostelInfoById(hostels, student.hostelId).hostelName}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        })}
        direction="row"
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            margin: theme.spacing(0, 1),
            padding: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
              height: "inherit",
            },
          })}
        >
          <Text
            text="For Your Infomation"
            props={{ sx: { fontWeight: "bold" } }}
          />
          <SizedBox height={1} />
          <Divider />
          <Typography
            variant="body2"
            sx={(theme) => ({
              margin: theme.spacing(1.5, 0),
            })}
          >
            <ol>
              <li>
                If your Booking is Pending, it means the booking process was
                successful
              </li>
              <li>
                However, You must make <strong>Full Payment</strong>
                {""} before the booking will be approve
              </li>
              <li>After payment, your booking will be approved the next day</li>
              <li>
                When your Booking is approved, Pending approval will change to
                your room number
              </li>
              <li>
                You are Require to make payment at{" "}
                <strong>GCB,Fidelity or Zenith Bank Only</strong>
              </li>
              <li>
                When you visit any of the above banks, tell them you are paying
                UENR hostel fees
              </li>
              <li>
                Do not take any account number from anyone. the Above banks have
                all the details of the University hostel
              </li>
              <li>
                You are required to pay exact fee of the hostel you booked.
                <strong>
                  GetFund Hostel fee: GH₵ 2322.00 New Hostel: GH₵2484.00
                </strong>
              </li>
              <li>
                You are required to download <strong>Tenancy Agreement</strong>
                Form when your booking is approved and submit it on the day of
                arrival
              </li>
            </ol>
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            spacing={2}
            sx={(theme) => ({
              margin: theme.spacing(1, 0),
              textTransform: "none",
              borderRadius: theme.spacing(0.5),
              border: "0px",
            })}
          >
            {student &&
            Boolean(student.roomNumber) &&
            GetHostelInfoById(hostels, student.hostelId).hostelName ===
              "Getfund Hostel" ? (
              <TenancyAgreement />
            ) : student &&
              Boolean(student.roomNumber) &&
              GetHostelInfoById(hostels, student.hostelId).hostelName ===
                "New Hostel" ? (
              <TenancyAgreenmentNewHostel />
            ) : (
              <Box></Box>
            )}

            {/* <Button
              variant="outlined"
              fullWidth
              onClick={Data.tenancyAgreement()}
            >
              <FcDownload />
              Tenancy Agreement
            </Button> */}
            {/* <Typography variant="body2">Tenancy Agreement</Typography>
            <ExportToPdf dataRef={pdfRef} /> */}
          </Stack>
          <Button
            sx={(theme) => ({
              margin: theme.spacing(1, 0),
              textTransform: "none",
            })}
            size="small"
            fullWidth
            variant="outlined"
            color="error"
            onClick={() => setAddComplain(true)}
          >
            Report Problem
          </Button>
          <Button
            sx={(theme) => ({
              margin: theme.spacing(1, 0),
              textTransform: "none",
            })}
            size="small"
            fullWidth
            variant="outlined"
            color="primary"
          >
            Room Members
          </Button>
        </Box>
        <Box
          ref={pdfRef}
          sx={(theme) => ({
            width: "100%",
            margin: theme.spacing(0, 1),
            padding: theme.spacing(1),
            height: "100vh",
            border: "1px solid #d0d0d0",
            overflowX: "hidden",
            overflowY: "auto",
            [theme.breakpoints.down("sm")]: {
              borderStyle: "none",
            },
          })}
        >
          <Text props={{ sx: { fontWeight: "bold" } }} text="Contact Address" />
          <Divider />
          <SizedBox height={1} />
          <Typography variant="body2">
            <FcCallback /> 0507907082
          </Typography>
          <Typography variant="body2">
            <FcImport /> hostel@uenr.edu.gh
          </Typography>
          <SizedBox height={1} />

          {/* <Button
            fullWidth
            sx={(theme) => ({
              margin: theme.spacing(1.5, 0),
            })}
            size="small"
            variant="outlined"
          >
            Checkout
          </Button>*/}
          <Divider sx={{ marginTop: "5%" }} />
          <Text props={{ sx: { fontWeight: "bold" } }} text="Noticeboard" />
          <Typography variant="body1" color="#fc030f">
            <FcAssistant />
            Announcement
          </Typography>
          <Typography variant="body1">
            No Announcement for you. keep enjoycing your stay
          </Typography>
          {/* <Button
            fullWidth
            sx={(theme) => ({
              margin: theme.spacing(1.5, 0),
            })}
            variant="outlined"
            size="small"
          >
            Read More
          </Button> */}
        </Box>
      </Stack>
    </Container>
  );
}
