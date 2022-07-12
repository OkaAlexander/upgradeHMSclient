import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginPage() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
    >
      <Box
        sx={(theme) => ({
          width: 400,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
          backgroundColor: "#fff",
          margin: theme.spacing(2, 0),
          minHeight: "100px",
          border: "0px solid #d0d0d0",
          borderRadius: theme.spacing(0.5),
          paddingBottom: theme.spacing(2),
        })}
      >
        <Box
          sx={(theme) => ({
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          })}
        >
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Reference Number"
            sx={(theme) => ({
              marginTop: theme.spacing(2),
            })}
          />
          <Button
            variant="contained"
            size="small"
            sx={(theme) => ({
              width: 150,
              alignSelf: "flex-end",
              margin: theme.spacing(1, 0),
            })}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
          padding: theme.spacing(2, 0),
        })}
      >
        <Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <ul>
            <li>Fidelity Bank</li>
            <li>Zenith Bank</li>
            <li>GCB</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
