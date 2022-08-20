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
import { CustomChip } from "../components";
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
          <CustomChip
            Icon={HomeOutlined}
            title="Hostel Name"
            handleClick={() => {}}
          />
          <Chip
            onClick={handleProfileMenu}
            avatar={<AccountCircleOutlined />}
            label={<Typography variant="body2">Biliksuun Samuel</Typography>}
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
