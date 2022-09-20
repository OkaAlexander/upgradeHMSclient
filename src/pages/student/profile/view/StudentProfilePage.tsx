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
import { FcDepartment, FcReading } from "react-icons/fc";
import { useAppSelector } from "../../../../app/hooks";
import { SizedBox, Text } from "../../../../components";
import ComplainModel, {
  ComplainModelInfo,
} from "../../../../model/ComplainModel";
import { ExportToPdf } from "../../../../shared";
import { GetHostelInfoById } from "../../../service";
import { AddComplainView } from "../../view";

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
            <FcReading />

            {student && Boolean(student.roomNumber) ? (
              <Chip
                onClick={() => {}}
                sx={(theme) => ({
                  borderRadius: 0,
                  borderStyle: "none",
                })}
                variant="outlined"
                size="small"
                label="Room Members"
              />
            ) : (
              <Typography variant="body1">Booking Pending</Typography>
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
          <Text text="University of Energy and Natural Resources, Hostel Management System" />
          <SizedBox height={1} />
          <Divider />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            veritatis distinctio minus possimus reprehenderit, earum ad fugiat
            necessitatibus iste commodi aliquam rerum libero est provident omnis
            delectus cumque eius et cupiditate exercitationem. Aliquam eum
            alias, officia, quidem expedita est maiores ratione eos sunt
            excepturi modi commodi laudantium debitis illum numquam quos maxime
            velit enim itaque.
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
            <Typography variant="body2">Tenancy Agreement</Typography>
            <ExportToPdf dataRef={pdfRef} />
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
          <Text
            props={{ sx: { fontWeight: "bold" } }}
            text="Explore Our Services"
          />
          <Divider />
          <SizedBox height={1} />
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse atque
            ab mollitia consequuntur praesentium, dolore molestiae amet
            explicabo nihil, dolores quaerat numquam aliquid, suscipit id!
          </Typography>
          <SizedBox height={1} />
          <Divider />
          <Text props={{ sx: { fontWeight: "bold" } }} text="Home Sales" />
          <SizedBox height={1} />
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            aperiam impedit nihil velit cum laborum!
          </Typography>
          <Button
            fullWidth
            sx={(theme) => ({
              margin: theme.spacing(1.5, 0),
            })}
            size="small"
            variant="outlined"
          >
            Checkout
          </Button>
          <Divider />
          <Text props={{ sx: { fontWeight: "bold" } }} text="Policy" />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus ut optio sint consectetur sequi enim? Eligendi animi obcaecati
            delectus!
          </Typography>
          <Button
            fullWidth
            sx={(theme) => ({
              margin: theme.spacing(1.5, 0),
            })}
            variant="outlined"
            size="small"
          >
            Read More
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
