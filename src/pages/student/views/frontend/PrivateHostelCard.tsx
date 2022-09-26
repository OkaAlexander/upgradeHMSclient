import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PrivateHostelModel from "../../../../model/PrivateHostelModel";
import configuration from "../../../../configurations/configurations";
import { FcPhone, FcReadingEbook } from "react-icons/fc";
import { ArrowDropDownOutlined, LocationOnOutlined } from "@mui/icons-material";
interface IProps {
  info: PrivateHostelModel;
}
export default function PrivateHostelCard({ info }: IProps) {
  return (
    <Grid margin={1} component={Paper} item xs={10} md={4} sm={6} lg={3} xl={2}>
      <Stack width="100%" alignItems="flex-start" justifyContent="center">
        <Box
          sx={(theme) => ({
            height: "200px",
            width: "100%",
          })}
        >
          <img
            src={configuration.remoteResource + info.image}
            alt="hostel-poster"
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          padding={1}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "left",
              },
            })}
            variant="body1"
          >
            {info.hostelName}
          </Typography>

          <Stack
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
              },
            })}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2">Price:</Typography>
            <Typography
              sx={(theme) => ({
                color: theme.palette.primary.dark,
                fontWeight: "bold",
              })}
              variant="body2"
            >
              {info.price}
            </Typography>
          </Stack>
        </Stack>
        <Divider />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
          paddingX={1}
        >
          <FcPhone />
          <Typography variant="body2">{info.contact1}</Typography>/
          <Typography variant="body2">{info.contact1}</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          paddingX={1}
        >
          <LocationOnOutlined />
          <Typography variant="body2">{info.location}</Typography>
        </Stack>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownOutlined />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <FcReadingEbook />
              <Typography>About Hostel</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{info.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Grid>
  );
}
