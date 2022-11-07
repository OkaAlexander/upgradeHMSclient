import { Box, Stack, Tooltip } from "@mui/material";
import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  CustomIconButton,
  Expanded,
  HomeNavLink,
  SizedBox,
} from "../../../../components";
import FlatIcons from "../../../../constants/icons";
import { InitLogout } from "../../../../features/slice/StudentReducer";
import { IMenubarRoute } from "../../interface";

interface IProps {
  handleMobileMenu?: (event: MouseEvent<HTMLButtonElement>) => void;
  handleAccountMenu?: (event: MouseEvent<HTMLButtonElement>) => void;
  isAuthenticated?: boolean;
  routes: IMenubarRoute[];
}
export default function MenuBarView({
  handleMobileMenu,
  handleAccountMenu,
  isAuthenticated,
  routes,
}: IProps) {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { student } = useAppSelector((state) => state.StudentReducer);
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
        <SizedBox width={5} />
        {routes.map((route) => (
          <HomeNavLink
            handleClick={() => navigation(route.route ? route.route : "")}
            key={route.title}
            route={route}
          />
        ))}
        {Boolean(student) && <Expanded />}
        {Boolean(student) && (
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            })}
          >
            <HomeNavLink
              handleClick={() => dispatch(InitLogout())}
              route={{ title: "Logout" }}
            />
          </Box>
        )}
        <SizedBox width={3} />
      </Box>
      <Box
        sx={(theme) => ({
          display: Boolean(isAuthenticated) ? "flex" : "none",
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
        {/* <Tooltip title="Shop">
          <CustomIconButton Icon={FlatIcons.FcPaid} />
        </Tooltip> */}
        {/* <SizedBox width={1} />
        <CustomIconButton Icon={FlatIcons.FcNews} />
        <SizedBox width={1} />
        <SizedBox width={1} /> */}
        <CustomIconButton
          handleClick={handleAccountMenu}
          Icon={FlatIcons.FcBusinessContact}
        />
        {/* <CustomIconButton Icon={FlatIcons.FcRules} /> */}
        <Stack flex={1} />
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
          <CustomIconButton
            handleClick={handleMobileMenu}
            Icon={FlatIcons.FcMenu}
          />
        </Box>
      </Box>
    </Box>
  );
}
