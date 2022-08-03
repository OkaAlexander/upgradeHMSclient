import { Box, Container } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { DashboardMenuRoutes } from "../../data";
import {
  AccountMenu,
  AppbarView,
  MenuBarView,
  MobileMenu,
} from "../../views/frontend";

export default function DashboardPage() {
  const navigation = useNavigate();
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  const [accountMenu, setAccountMenu] = useState<HTMLElement | null>(null);
  const { student } = useAppSelector((state) => state.StudentReducer);

  function handleMobileMenu(event: MouseEvent<HTMLButtonElement>) {
    setMobileMenu(event.currentTarget);
  }
  function handleAccountMenu(event: MouseEvent<HTMLButtonElement>) {
    setAccountMenu(event.currentTarget);
  }

  useEffect(() => {
    !student
      ? navigation("/")
      : student.hostelId
      ? navigation("profile")
      : navigation("hostels");
  }, [student]);

  useEffect(() => {
    navigation("hostels");
  }, []);
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
      <AccountMenu
        handleClose={() => setAccountMenu(null)}
        anchorEl={accountMenu}
      />
      <MobileMenu
        handleClose={() => setMobileMenu(null)}
        anchorEl={mobileMenu}
      />
      <AppbarView />
      <MenuBarView
        isAuthenticated
        routes={DashboardMenuRoutes}
        handleAccountMenu={handleAccountMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
}
