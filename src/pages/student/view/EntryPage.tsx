import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomDivider, HomeNavLink } from "../../../components";
import Images from "../../../resources/Images";
import { Footer } from "../../../shared";
import { HomeNavLinks } from "../../data";

export default function EntryPage() {
  const navigation = useNavigate();

  return (
    <Container
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        overflow: "hidden",
      })}
    >
      <Box
        sx={(theme) => ({
          margin: theme.spacing(2),
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(0.5),
        })}
      >
        <Box
          sx={(theme) => ({
            height: "60px",
            [theme.breakpoints.down("sm")]: {
              width: "150px",
            },
          })}
        >
          <img
            style={{ objectFit: "contain" }}
            src={Images.school_logo}
            alt=""
          />
        </Box>
        <Box>
          <Typography
            sx={(theme) => ({
              fontSize: theme.spacing(2.5),
              fontWeight: "bold",
              color: theme.palette.primary.dark,
              textTransform: "uppercase",
              [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(2),
              },
            })}
            variant="body1"
          >
            accommodation
          </Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          padding: theme.spacing(0),
          borderRadius: theme.spacing(0.5),
          background: "linear-gradient(180deg, #f1f1f1,#e6e6e6)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
          height: "50px",
          [theme.breakpoints.down("sm")]: {
            height: "40px",
          },
        })}
      >
        {HomeNavLinks.map((route) => (
          <HomeNavLink
            handleClick={() => navigation(route.route ? route.route : "")}
            key={route.title}
            route={route}
          />
        ))}
      </Box>
      <Box
        sx={(theme) => ({
          height: "inherit",
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            height: "60%",
          },
        })}
      >
        <Outlet />
      </Box>
      <CustomDivider />
      <Footer />
    </Container>
  );
}
