/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { CustomDivider } from "../../../components";
import { Footer } from "../../../shared";
import { LandingMenuRoutes } from "../data";
import { AccountMenu, AppbarView, MenuBarView } from "../views/frontend";

export default function EntryPage() {
  const navigation = useNavigate();
  const { student } = useAppSelector((state) => state.StudentReducer);
  const [accountMenu, setAccountMenu] = useState<HTMLButtonElement | null>(
    null
  );
  useEffect(() => {
    !student && navigation("/");
  }, [student]);

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        overflow: "hidden",
        height: "100vh",
      })}
    >
      <AccountMenu
        anchorEl={accountMenu}
        handleClose={() => setAccountMenu(null)}
      />
      <AppbarView />
      <MenuBarView
        handleAccountMenu={(event) => setAccountMenu(event.currentTarget)}
        routes={LandingMenuRoutes}
      />

      <Box
        sx={(theme) => ({
          height: "inherit",
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            height: "60%",
          },
          paddingBottom: "100px",
          overflowY: "auto",
          overflowX: "hidden",
        })}
      >
        <Outlet />
      </Box>
      <CustomDivider />
      <Footer />
    </Box>
  );
}
