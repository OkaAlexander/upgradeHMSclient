import { Box, ChipTypeMap, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Routes } from "../../../routes";
import { PageHeader, ProfileMenu } from "../../../shared";
import { Navbar, Sidebar } from "../../../views";

export default function EntryPage() {
  const navigation = useNavigate();
  const [pageHeader, setPageHeader] = useState<string>("Room Info");
  const [profileMenu, setProfileMenu] = useState<HTMLDivElement | null>(null);
  const [sidebar, setSidebar] = useState<boolean>(true);
  function handleProfileMenu() {
    setProfileMenu(null);
  }

  useEffect(() => {
    navigation(Routes.CHECKINS);
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
        handlePageHeader={(header) => setPageHeader(header)}
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

      <PageHeader title={pageHeader} />
      <Box
        sx={{
          width: "100%",
          paddingLeft: sidebar ? "240px" : 0,
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
