import { HouseOutlined, TurnedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FcDepartment, FcHome, FcRefresh } from "react-icons/fc";
import { useSelector } from "react-redux";
import { PostRoutes } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomTableCell,
  CustomTableRow,
  Expanded,
  Input,
  MenuChipButton,
} from "../../../components";
import { GetPrivateHostelsThunk } from "../../../functions/get";
import { AddHostelThunk, AddPrivateHostelThunk } from "../../../functions/post";
import { GetHostelsThunk } from "../../../functions/thunk";
import HostelModel from "../../../model/HostelModel";
import PrivateHostelModel from "../../../model/PrivateHostelModel";
import { AddHostelMenu, CustomModal } from "../../../shared";
import {
  HostelInfoView,
  NewHostelInfoView,
  PrivateHostelInfoView,
  TableTemplate,
} from "../../../views";
import { HostelsTableHeader, PrivateHostelsTableHeader } from "../../data";
import { PrivateHostelTabPanel, SchoolHostelTabPanel } from "../components";

export default function HostelInfoPage() {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<number>(0);
  const { privateHostels } = useAppSelector(
    (state) => state.PrivateHostelReducer
  );
  const [info, setInfo] = useState<HostelModel | null>(null);
  const [privateHostel, setPrivateHostel] = useState<PrivateHostelModel | null>(
    null
  );
  const [update, setUpdate] = useState<boolean>(false);
  const [hst, setHst] = useState<boolean>(true);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [hid, setHid] = useState<any>(null);
  const [phid, setPhid] = useState<any>(null);
  useEffect(() => {
    dispatch(GetHostelsThunk());
    dispatch(GetPrivateHostelsThunk());
  }, []);

  useEffect(() => {
    if (hid) {
      const h = hostels.find((host) => host.hostelId === hid);
      if (h) {
        setInfo(h);
      }
    } else {
      setInfo(null);
    }
  }, [hid]);

  useEffect(() => {
    if (phid) {
      const h = privateHostels.find((ph) => ph.id === phid);
      h && setPrivateHostel(h);
    } else {
      setPrivateHostel(null);
    }
  }, [phid]);

  return (
    <Box>
      <Box
        sx={(theme) => ({
          height: "50vh",
          background: theme.palette.action.hover,
          width: "100%",
          padding: theme.spacing(2),
          overflow: "auto",
        })}
      >
        <Container sx={(theme) => ({ heigth: "100%" })}>
          <Box
            sx={(theme) => ({
              boxShadow: theme.shadows[1],
              borderRadius: 0,
              padding: theme.spacing(1),
              height: "100%",
            })}
          >
            <Tabs
              value={tab}
              onChange={(event, newIndex) => setTab(newIndex)}
              aria-label="basic tabs example"
            >
              <Tab
                sx={(theme) => ({
                  padding: theme.spacing(0.15),
                })}
                label="School"
              />
              <Tab
                sx={(theme) => ({
                  padding: theme.spacing(0.15),
                })}
                label="Private"
              />
            </Tabs>
            <Divider />
            <Stack>
              <SchoolHostelTabPanel
                selectedHostel={info}
                value={tab}
                index={0}
              />
              <PrivateHostelTabPanel
                privateHostel={privateHostel}
                value={tab}
                index={1}
              />
            </Stack>
          </Box>
        </Container>
      </Box>
      <Divider />
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            paddingY={1}
          ></Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            paddingY={1}
            spacing={1}
            width={"100%"}
          >
            <Chip
              size="small"
              onClick={() => {
                dispatch(GetHostelsThunk());
                dispatch(GetPrivateHostelsThunk());
              }}
              label={<Typography variant="body1">Refresh</Typography>}
              avatar={<FcRefresh />}
              sx={(theme) => ({
                marginRight: theme.spacing(2),
              })}
            />
            <Expanded />
            <Chip
              size="small"
              onClick={() =>
                dispatch(
                  AddPrivateHostelThunk({
                    data: null,
                    route: PostRoutes.update_hostel_visibility,
                  })
                )
              }
              label={
                <Typography variant="body1">Show Private Hostels</Typography>
              }
              avatar={<FcDepartment />}
              sx={(theme) => ({
                marginRight: theme.spacing(4),
                borderRadius: theme.spacing(1),
                background: theme.palette.background.default,
              })}
              // variant="outlined"
            />

            <Stack direction="row" alignItems="center">
              <FcHome />
              <Typography variant="body1">School</Typography>
              <Checkbox onClick={() => setHst(!hst)} checked={Boolean(hst)} />
            </Stack>
            <Stack direction="row" alignItems="center">
              <FcHome />
              <Typography variant="body1">Private</Typography>
              <Checkbox onClick={() => setHst(!hst)} checked={!Boolean(hst)} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container>
        <TableTemplate
          header={hst ? HostelsTableHeader : PrivateHostelsTableHeader}
        >
          {hst
            ? hostels.map((h, index) => (
                <CustomTableRow index={index} key={h.hostelId}>
                  <React.Fragment>
                    <CustomTableCell
                      props={{ align: "left" }}
                      content={h.hostelId}
                    />
                    <CustomTableCell
                      props={{ align: "left" }}
                      content={h.hostelName}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.totalCapacity.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.slotLeft.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.totalBooked.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.totalApproved.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.price.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={
                        <Checkbox
                          onClick={() => {
                            if (h.hostelId === hid) {
                              setHid(null);
                            } else {
                              setHid(h.hostelId);
                            }
                          }}
                          checked={Boolean(h.hostelId === hid)}
                        />
                      }
                    />
                  </React.Fragment>
                </CustomTableRow>
              ))
            : privateHostels.map((h, index) => (
                <CustomTableRow index={index} key={h.id}>
                  <React.Fragment>
                    <CustomTableCell props={{ align: "left" }} content={h.id} />
                    <CustomTableCell
                      props={{ align: "left" }}
                      content={h.hostelName}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.price.toString()}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.location}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={h.contact1}
                    />

                    <CustomTableCell
                      props={{ align: "center" }}
                      content={
                        <Checkbox
                          onClick={() => {
                            if (h.id === phid) {
                              setPhid(null);
                            } else {
                              setPhid(h.id);
                            }
                          }}
                          checked={Boolean(h.id === phid)}
                        />
                      }
                    />
                  </React.Fragment>
                </CustomTableRow>
              ))}
        </TableTemplate>
      </Container>
    </Box>
  );
}
