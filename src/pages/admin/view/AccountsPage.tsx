import { EditOutlined } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  FcCancel,
  FcCheckmark,
  FcReading,
  FcRefresh,
  FcViewDetails,
} from "react-icons/fc";
import { PostRoutes } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CustomTableCell, CustomTableRow } from "../../../components";
import controller from "../../../controller";
import {
  responseFail,
  responsePending,
  responseSuccess,
} from "../../../features/slice/ResponseReducer";
import { SetUsers } from "../../../features/slice/UsersSlice";
import { GetUsersThunk } from "../../../functions/auth";
import UserModel from "../../../model/UserModel";
import { TableTemplate } from "../../../views";
import { UserAccountAction } from "../components";
import { UsersTableHeader } from "../data";

export default function AccountsPage() {
  const [tab, setTab] = useState<number>(0);
  const [Users, setUsers] = useState<UserModel[]>([]);
  const [userInfo, setUserInfo] = useState<UserModel | null>(null);
  const [actionMenu, setActionMenu] = useState<HTMLElement | null>(null);
  const { user } = useAppSelector((state) => state.UserReducer);
  const { users } = useAppSelector((state) => state.UsersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUsers(users.filter((u) => u.id !== user?.id));
  }, [users]);

  useEffect(() => {
    dispatch(GetUsersThunk({ id: user ? user.id.toString() : "userid" }));
  }, []);

  useEffect(() => {
    if (tab === 0) {
      setUsers(users.filter((u) => u.id !== user?.id));
    }
    if (tab === 1) {
      setUsers(users.filter((u) => u.role === 1 && u.id !== user?.id));
    }
    if (tab === 2) {
      setUsers(users.filter((u) => u.status === 0 && u.id !== user?.id));
    }
  }, [tab]);

  async function handleUpdateUserStatus(user: UserModel) {
    try {
      dispatch(responsePending());

      const response = await controller.Post<{
        data: UserModel[];
        message: string;
      }>({ url: PostRoutes.update_user_status, data: user });
      dispatch(SetUsers(response.data));
      dispatch(responseSuccess(response.message));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  async function handleUpdateUserRole(user: UserModel) {
    try {
      dispatch(responsePending());

      const response = await controller.Post<{
        data: UserModel[];
        message: string;
      }>({ url: PostRoutes.update_user_role, data: user });
      dispatch(SetUsers(response.data));
      dispatch(responseSuccess(response.message));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding={2}
      >
        <UserAccountAction
          user={userInfo}
          handleClose={() => setActionMenu(null)}
          handleRole={() => {
            userInfo && handleUpdateUserRole(userInfo);
          }}
          handleStatus={() => {
            userInfo && handleUpdateUserStatus(userInfo);
          }}
          anchorEl={actionMenu}
        />
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            padding={1}
            sx={(theme) => ({
              boxShadow: theme.shadows[1],
            })}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              paddingLeft={2}
            >
              <FcReading />
              <Typography variant="body1">Registered Users</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              paddingLeft={2}
            >
              <Chip
                onClick={() =>
                  dispatch(
                    GetUsersThunk({ id: user ? user.id.toString() : "userid" })
                  )
                }
                sx={(theme) => ({
                  borderRadius: 0,
                  background: theme.palette.background.paper,
                })}
                size="small"
                avatar={<FcRefresh />}
                label={"Refresh"}
              />
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
              <Tab
                sx={(theme) => ({
                  padding: theme.spacing(0.25, 0),
                  textTransform: "none",
                })}
                label="All"
              />
              <Tab
                sx={(theme) => ({
                  padding: theme.spacing(0.25, 0),
                  textTransform: "none",
                })}
                label="Admin"
              />
              <Tab
                sx={(theme) => ({
                  padding: theme.spacing(0.25, 0),
                  textTransform: "none",
                })}
                label="Pending"
              />
            </Tabs>
          </Stack>

          <Divider />
          <Stack>
            <TableTemplate header={UsersTableHeader}>
              {Users.map((user, index) => (
                <CustomTableRow index={index} key={user.id}>
                  <CustomTableCell
                    content={user.name}
                    props={{ align: "left" }}
                  />
                  <CustomTableCell
                    content={user.phone}
                    props={{ align: "center" }}
                  />
                  <CustomTableCell
                    content={user.email}
                    props={{ align: "center" }}
                  />
                  <CustomTableCell
                    content={Boolean(user.role) ? "Admin" : "User"}
                    props={{ align: "center" }}
                  />
                  <CustomTableCell
                    content={Boolean(user.status) ? "Active" : "InActive"}
                    props={{ align: "center" }}
                  />
                  <CustomTableCell
                    content={
                      <IconButton
                        onClick={(e) => {
                          setUserInfo(user);
                          setActionMenu(e.currentTarget);
                        }}
                        size="small"
                      >
                        <FcViewDetails />
                      </IconButton>
                    }
                    props={{ align: "center" }}
                  />
                </CustomTableRow>
              ))}
            </TableTemplate>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
