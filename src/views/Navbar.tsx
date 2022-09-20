import { AccountCircleOutlined, HomeOutlined, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { FcDepartment, FcManager } from "react-icons/fc";
import { useAppSelector } from "../app/hooks";
import { CustomChip } from "../components";
import { GetHostelInfoById } from "../pages/service";
import Images from "../resources/Images";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
  handleProfileMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export default function Navbar({
  sidebar,
  handleSidebar,
  handleProfileMenu,
}: IProps) {
  const { user, hostel } = useAppSelector((state) => state.UserReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  return (
    <AppBar
      sx={(theme) => ({
        height: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: (theme) => theme.shadows[1],
        top: 0,
        zIndex: 1005,
        paddingLeft: sidebar ? "240px" : 0,
        transition: "all 0.15s ease",
        background: theme.palette.common.white,
      })}
      elevation={0}
      color="default"
      position="fixed"
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: (theme) => theme.spacing(0, 1),
          }}
        >
          <Box sx={{ height: "40px", width: "150px" }}>
            <img src={Images.labeledlogo} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 0.85,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: (theme) => theme.spacing(0, 2),
          }}
        >
          <Chip
            avatar={<FcDepartment />}
            label={GetHostelInfoById(hostels, hostel).hostelName}
            sx={(theme) => ({
              borderRadius: 0,
              borderStyle: "none",
              background: theme.palette.background.paper,
            })}
          />
          <Chip
            size="small"
            onClick={handleProfileMenu}
            sx={(theme) => ({
              borderRadius: 0,
              borderStyle: "none",
              background: theme.palette.background.paper,
            })}
            avatar={<FcManager />}
            label={<Typography variant="body2">{user?.name}</Typography>}
          />
          <IconButton
            onClick={handleSidebar}
            sx={{ margin: (theme) => theme.spacing(0, 1) }}
            size="small"
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
