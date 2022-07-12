import {
  Box,
  Button,
  Container,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomInput } from "../../../components";

export default function RegisterStudentPage() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingBottom: theme.spacing(10),
      })}
    >
      <Container
        sx={(theme) => ({
          margin: theme.spacing(2, 0),
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignSelf: "center",
        })}
      >
        <Stack
          direction="row"
          sx={(theme) => ({
            padding: theme.spacing(2),
            boxShadow: theme.shadows[1],
            borderRadius: 0,
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
            },
            alignSelf: "center",
            width: "100%",
          })}
          spacing={0}
        >
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Student Name" />
            <CustomInput label="Phone Number" />
            <CustomInput label="Reference Number" />
            <CustomInput label="Email" />
          </Box>
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Level" select />
            <CustomInput label="Academic Year" select />
            <CustomInput label="Program" select />
            <CustomInput label="Gender" select />
          </Box>
          <Box
            sx={(theme) => ({
              margin: theme.spacing(0, 1),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(1),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <Box
              sx={(theme) => ({
                width: 200,
                height: 150,
                borderRadius: theme.spacing(0.5),
                boxShadow: theme.shadows[1],
                alignSelf: "centern",
                margin: theme.spacing(0.5, 0),
                background: "#f5f5f5",
              })}
            ></Box>
            <Box
              sx={(theme) => ({
                width: 200,
                margin: theme.spacing(0.5, 0),
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              })}
            >
              <TextField
                sx={(theme) => ({ display: "none" })}
                variant="outlined"
                type="file"
                size="small"
                id="file-input"
              />
              <FormLabel
                sx={(theme) => ({
                  padding: theme.spacing(0, 1),
                  width: "100%",
                  border: "0.5px solid #d0d0d0",
                  alignSelf: "center",
                  borderRadius: theme.spacing(0.5),
                  cursor: "pointer",
                })}
                htmlFor="file-input"
              >
                <Typography
                  variant="body1"
                  sx={(theme) => ({ textAlign: "center", width: "100%" })}
                >
                  Choose Image
                </Typography>
              </FormLabel>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(1),
            borderRadius: 0,
            boxShadow: theme.shadows[1],
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: theme.spacing(1, 0),
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBotom: theme.spacing(5),
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Hostel" select />
          </Box>
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 1),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <CustomInput label="Room Number" select />
          </Box>
          <Box
            sx={(theme) => ({
              width: "200px",
              margin: theme.spacing(0, 1),
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                margin: theme.spacing(1, 0),
              },
            })}
          >
            <Button
              fullWidth
              size="medium"
              sx={(theme) => ({ height: 38 })}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
