import { Box, ChipTypeMap, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetHostelsThunk } from "../../../functions/thunk";
import { Routes } from "../../../routes";
import { ProfileMenu } from "../../../shared";
import { Navbar, Sidebar } from "../../../views";

export default function EntryPage() {
  const navigation = useNavigate();
  const { user } = useAppSelector((state) => state.UserReducer);
  const [profileMenu, setProfileMenu] = useState<HTMLDivElement | null>(null);
  const [sidebar, setSidebar] = useState<boolean>(true);
  function handleProfileMenu() {
    setProfileMenu(null);
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    !user && navigation("/admin/login");
    user && !Boolean(user.status) && navigation("/admin/pending");
  }, [user]);
  useEffect(() => {
    navigation(Routes.CHECKINS);
    dispatch(GetHostelsThunk());
  }, []);
  return (
    <Box
      sx={(theme) => ({
        overflow: "hidden",
        flex: 1,
        height: "100vh",
      })}
    >
      <Sidebar
        handleSidebar={() => setSidebar(!sidebar)}
        handlePageHeader={(header) => {}}
        sidebar={sidebar}
      />
      <Navbar
        handleProfileMenu={(event) => setProfileMenu(event.currentTarget)}
        handleSidebar={() => setSidebar(!sidebar)}
        sidebar={sidebar}
      />
      <ProfileMenu
        open={Boolean(profileMenu)}
        handleClose={handleProfileMenu}
        anchorEl={profileMenu}
      />

      {/* <PageHeader title={pageHeader} /> */}
      <Box
        sx={{
          width: "100%",
          paddingLeft: sidebar ? "240px" : 0,
          overflow: "hidden",
          height: "100%",
          marginTop: "60px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
