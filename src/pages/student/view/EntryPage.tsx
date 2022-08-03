/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { CustomDivider } from "../../../components";
import { Footer } from "../../../shared";
import { LandingMenuRoutes } from "../data";
import { AppbarView, MenuBarView } from "../views/frontend";

export default function EntryPage() {
  const navigation = useNavigate();
  const { student } = useAppSelector((state) => state.StudentReducer);

  useEffect(() => {
    !student && navigation("/");
  }, [student]);

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
      <AppbarView />
      <MenuBarView routes={LandingMenuRoutes} />

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
