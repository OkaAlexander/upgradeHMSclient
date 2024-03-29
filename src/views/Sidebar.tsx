import { ChevronLeft, Dashboard } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { SidebarLink } from "../components";
import { appColors } from "../constants/colors";
import { AdminRoutes, userRoutes } from "../routes";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
  handlePageHeader: (header: string) => void;
}
export default function Sidebar({
  sidebar,
  handleSidebar,
  handlePageHeader,
}: IProps) {
  const navigation = useNavigate();
  const { user } = useAppSelector((state) => state.UserReducer);
  function handleNavigation(route: string) {
    navigation(route);
  }
  return (
    <Drawer
      sx={{ width: 240, background: appColors.default }}
      variant="persistent"
      open={sidebar}
      anchor="left"
    >
      <Box
        sx={(theme) => ({
          width: 240,
          padding: 0,
          background: theme.palette.primary.main,
          height: "100vh",
        })}
      >
        <Box
          sx={{
            height: "60px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: (theme) => theme.palette.common.white,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: (theme) => theme.spacing(0, 1),
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <Dashboard />
            <Typography
              sx={{
                margin: (theme) => theme.spacing(0, 0.5),
                fontWeight: "bold",
              }}
              variant="body1"
            >
              DASHBOARD
            </Typography>
          </Box>
          <IconButton
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            onClick={handleSidebar}
            size="small"
          >
            <ChevronLeft htmlColor={appColors.default} />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            width: "100%",
            paddingBottom: (theme) => theme.spacing(4),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {user &&
            Boolean(user.role) &&
            AdminRoutes.map((r) => (
              <SidebarLink
                info={{ route: r.url, Icon: r.icon, title: r.name }}
                key={r.url}
              />
            ))}
          {user &&
            !Boolean(user.role) &&
            userRoutes.map((r) => (
              <SidebarLink
                info={{ route: r.url, Icon: r.icon, title: r.name }}
                key={r.url}
              />
            ))}
        </Box>
      </Box>
    </Drawer>
  );
}
