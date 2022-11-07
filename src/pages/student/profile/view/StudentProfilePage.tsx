import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { FcDepartment, FcDownload, FcReading } from "react-icons/fc";
import { useAppSelector } from "../../../../app/hooks";
import { SizedBox, Text } from "../../../../components";
import { ExportToPdf } from "../../../../shared";
import { GetHostelInfoById } from "../../../service";
import { AddComplainView } from "../../view";
import pdfGenerator from "../../../../generatePdf/TenancyAgreement";
import { FcCallback, FcImport, FcAssistant } from "react-icons/fc";
import TenancyAgreement from "../../../../shared/GenerateTanancy";

export default function StudentProfilePage() {
  const { student } = useAppSelector((state) => state.StudentReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [addComplain, setAddComplain] = useState<boolean>(false);
  const pdfRef = useRef<any>(null);

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
              <Typography variant="body1" color="warning">
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
            text="Rules & Regulations"
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
                All students offered accommodation must, on arrival, sign a
                Residence Book.
              </li>
              <li>
                All students offered accommodation must read and sign a tenancy
                agreement before moving to their respective rooms.
              </li>
              <li>
                A student who is offered Hostel accommodation but decides to
                stay off-campus must inform, in writing, the Hostel Manager of
                his/her decline of the offer.
              </li>
              <li>
                No student shall, under any condition or circumstance, either
                transfer his/her Hostel accommodation to any other student or
                accept such an illegal offer.
              </li>
              <li>
                Any student who breaches the rule shall either pay a fine or
                lose his/her residential status.
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
              border: `1px solid ${theme.palette.action.hover}`,
            })}
          >
            <TenancyAgreement />
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
            <FcCallback /> 0202440507
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
