import { Box } from "@mui/material";
import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  CustomIconButton,
  HomeNavLink,
  SizedBox,
} from "../../../../components";
import FlatIcons from "../../../../constants/icons";
import { HomeNavLinks } from "../../../data";

interface IProps {
  handleMobileMenu?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function MenuBarView({ handleMobileMenu }: IProps) {
  const navigation = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        padding: theme.spacing(0),
        borderRadius: theme.spacing(0.5),
        background: "linear-gradient(180deg, #f1f1f1,#e6e6e6)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: theme.shadows[1],
        height: "50px",
        [theme.breakpoints.down("sm")]: {
          height: "40px",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            display: "none",
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          },
        })}
      >
        <CustomIconButton Icon={FlatIcons.FcPaid} />
        <SizedBox width={1} />
        <CustomIconButton Icon={FlatIcons.FcNews} />
        <SizedBox width={1} />
        <CustomIconButton Icon={FlatIcons.FcBusinessContact} />
        <SizedBox width={1} />
        <CustomIconButton Icon={FlatIcons.FcRules} />
        <Box
          sx={(theme) => ({
            display: "row",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          })}
        >
          <SizedBox width={1} />
          <CustomIconButton
            handleClick={handleMobileMenu}
            Icon={FlatIcons.FcMenu}
          />
        </Box>
        <SizedBox width={2} />
      </Box>
    </Box>
  );
}
