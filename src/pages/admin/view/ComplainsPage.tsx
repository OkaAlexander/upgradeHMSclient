import {
  Box,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  Tooltip,
  Typography,
  MenuItem,
  Chip,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdOutlineCategory } from "react-icons/md";
import {
  CustomInput,
  CustomTableCell,
  CustomTableRow,
  SizedBox,
} from "../../../components";
import FlatIcons from "../../../constants/icons";
import { GrStatusWarning } from "react-icons/gr";
import { TableTemplate } from "../../../views";
import { ComplainstableHeader } from "../data";
import moment from "moment";
import { ComplainsType, Problems } from "../../data";
import ComplainModel from "../../../model/ComplainModel";
import {
  responseFail,
  responsePending,
  responseSuccess,
} from "../../../features/slice/ResponseReducer";
import controller from "../../../controller";
import { GetRoutes, PostRoutes } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetHostelInfoById } from "../../service";
import { GetHostelsThunk } from "../../../functions/thunk";
import { FcCheckmark, FcRefresh } from "react-icons/fc";
import { ExportToExcel } from "../../../shared";
import { RiFileExcel2Line } from "react-icons/ri";
export default function ComplainsPage() {
  const dispatch = useAppDispatch();
  const [complains, setComplains] = useState<ComplainModel[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  async function getComplains(status?: number) {
    try {
      dispatch(responsePending());
      const data = await controller.Get<ComplainModel[]>({
        url: GetRoutes.get_complains_by_status(status),
      });
      setComplains(data);
      dispatch(responseSuccess(null));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  useEffect(() => {
    getComplains();
    dispatch(GetHostelsThunk());
  }, []);

  async function ResolveComplains() {
    try {
      dispatch(responsePending());
      const data = await controller.Post<{
        data: ComplainModel[];
        message: string;
      }>({
        url: PostRoutes.complains_resolve,
        data: selected,
      });
      setSelected([]);
      setComplains(data.data);
      dispatch(responseSuccess(data.message));
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  return (
    <Box
      sx={(theme) => ({
        p: 2,
        background: theme.palette.divider,
        height: "100%",
      })}
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing(1),
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 0,
          boxShadow: theme.shadows[1],
          background: theme.palette.background.paper,
        })}
      >
        <Stack
          sx={(theme) => ({
            alignItems: "center",
            pl: 1,
            flex: 1,
          })}
          direction="row"
        >
          <FlatIcons.FcReadingEbook />
          <SizedBox width={0.5} />
          <Typography variant="body1">Complains</Typography>
          <Chip
            size="small"
            avatar={<FcRefresh size={14} />}
            label={"Refresh"}
            onClick={() => {
              getComplains();
            }}
            sx={(theme) => ({
              borderStyle: "none",
              marginLeft: theme.spacing(2),
            })}
          />

          <Chip
            size="small"
            avatar={<FcCheckmark size={14} />}
            label={"Resolve"}
            onClick={() => {
              ResolveComplains();
            }}
            sx={(theme) => ({
              borderStyle: "none",
              marginLeft: theme.spacing(2),
              display: selected.length > 1 ? "block" : "none",
            })}
          />
        </Stack>
        <Stack
          direction="row"
          sx={(theme) => ({
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 2,
            flex: 1,
          })}
          alignItems="center"
        >
          <CustomInput
            props={{
              size: "small",
              variant: "standard",
              select: true,
              sx: { width: "250px" },
            }}
            label="Problem Type"
            handleChange={(e) =>
              setComplains(
                complains.filter((c) => c.problemType === e.target.value)
              )
            }
          >
            {Problems.map((c) => (
              <MenuItem value={c.title} key={c.title}>
                {c.title}
              </MenuItem>
            ))}
          </CustomInput>
          <SizedBox width={1} />
          <CustomInput
            props={{
              size: "small",
              variant: "standard",
              select: true,
              sx: { width: "150px" },
            }}
            handleChange={(e) => {
              if (e.target.value === "Resolved") {
                getComplains(1);
              } else {
                getComplains(0);
              }
            }}
            label="Complain Status"
          >
            <MenuItem value="">
              <small>None</small>
            </MenuItem>
            {["Resolved", "Pending"].map((status) => (
              <MenuItem value={status} key={status}>
                {status}
              </MenuItem>
            ))}
          </CustomInput>
          <SizedBox width={2.5} />
          <ExportToExcel
            fileName="Complains"
            dataSource={complains.map((c) => {
              return {
                StudentName: c.compliantName,
                RoomNumber: c.roomNumber,
                Status: Boolean(c.status) ? "Resolve" : "Pending",
                Problem: c.problem,
                Date: moment(c.dateOfComplain).format("DD/MM/YYYY"),
                Hostel: GetHostelInfoById(hostels, c.hostelId).hostelName,
              };
            })}
          >
            <IconButton size="small">
              <RiFileExcel2Line />
            </IconButton>
          </ExportToExcel>
        </Stack>
      </Box>
      <SizedBox height={1.5} />
      <Box>
        <TableTemplate header={ComplainstableHeader}>
          <React.Fragment>
            {complains.map((c, index) => (
              <CustomTableRow index={index} key={c.id}>
                <CustomTableCell
                  content={
                    <Checkbox
                      checked={selected.includes(c.id)}
                      onChange={() => {
                        if (selected.includes(c.id)) {
                          setSelected(selected.filter((s) => s !== c.id));
                        } else {
                          setSelected([...selected, c.id]);
                        }
                      }}
                    />
                  }
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={GetHostelInfoById(hostels, c.hostelId).hostelName}
                />
                <CustomTableCell props={{ align: "center" }} content={"A30"} />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={c.compliantName}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={c.problem}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={moment(c.dateOfComplain).format("DD/MM/YYYY h:m a")}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={Boolean(c.status) ? "Approved" : "Pending"}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={
                    <IconButton
                      disabled={Boolean(c.status)}
                      onClick={async () => {
                        try {
                          dispatch(responsePending());
                          const data = await controller.Post<{
                            data: ComplainModel[];
                            message: string;
                          }>({
                            url: PostRoutes.complains_resolve,
                            data: [c.id],
                          });
                          setComplains(data.data);
                          dispatch(responseSuccess(data.message));
                        } catch (error) {
                          dispatch(responseFail(error));
                        }
                      }}
                      size="small"
                    >
                      <FcCheckmark />
                    </IconButton>
                  }
                />
              </CustomTableRow>
            ))}
          </React.Fragment>
        </TableTemplate>
      </Box>
    </Box>
  );
}
