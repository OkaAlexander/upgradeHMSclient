import { Camera, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  FormGroup,
  FormLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { CustomInput, Input } from "../../../components";

export default function StudentInfo() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        alignSelf: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Container
        sx={(theme) => ({
          boxShadow: theme.shadows[1],
          padding: theme.spacing(1),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: theme.spacing(1, 0),
          alignSelf: "center",
        })}
      >
        <Typography variant="body1">Student Details</Typography>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          })}
        >
          <Input
            label="Search By Ref/Phone"
            placeholder="search"
            handleChange={(e) => console.log(e)}
          />
          <Chip
            onClick={() => {}}
            sx={(theme) => ({ borderRadius: theme.spacing(1) })}
            label={<Typography variant="body2">Search</Typography>}
            avatar={<Search />}
          />
        </Box>
      </Container>
      <Container sx={(theme) => ({ marginTop: theme.spacing(1.5) })}>
        <Stack
          sx={(theme) => ({
            padding: theme.spacing(2),
            boxShadow: theme.shadows[1],
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
            },
          })}
          direction="row"
        >
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput label="Student Name" />
            <CustomInput label="Index Number" />
            <CustomInput label="Program" />
            <CustomInput label="Level" />
            <CustomInput label="Phoe Number" />
          </Box>
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <CustomInput label="Gender" />
            <CustomInput label="Email Address" />
            <CustomInput label="Academic Year" />
            <CustomInput label="Hostel" />
            <CustomInput label="Room Number" />
          </Box>
          <Box
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: theme.spacing(0, 0.5),
              [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0.5, 0),
              },
            })}
          >
            <Box
              sx={(theme) => ({
                width: 200,
                height: 150,
                background: "red",
                alignSelf: "center",
                borderRadius: theme.spacing(0.5),
                boxShadow: theme.shadows[1],
              })}
            ></Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                width: "55%",
                alignSelf: "center",
                margin: theme.spacing(0.5, 0),
              })}
            >
              <FormGroup sx={(theme) => ({})}>
                <TextField
                  variant="outlined"
                  type="file"
                  sx={(theme) => ({ display: "none" })}
                  id="file-input"
                />
                <FormLabel
                  sx={(theme) => ({
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    margin: theme.spacing(0.5, 0),
                    cursor: "pointer",
                  })}
                  htmlFor="file-input"
                >
                  <Typography variant="body2">choose image</Typography>
                </FormLabel>
              </FormGroup>
              <Button
                sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
                variant="contained"
                size="small"
                color="primary"
              >
                Update
              </Button>
              <Button
                sx={(theme) => ({ marginBottom: theme.spacing(0.5) })}
                variant="outlined"
                size="small"
                color="secondary"
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
