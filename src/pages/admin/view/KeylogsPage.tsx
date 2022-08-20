import {
  Box,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
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
import { ComplainstableHeader, KeylogsTableHeader } from "../data";
import moment from "moment";
import { Search } from "@mui/icons-material";
export default function KeyLogsPage() {
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
          <Typography variant="body1">KeyLogs</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={(theme) => ({
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 2,
            flex: 1,
          })}
        >
          <CustomInput
            props={{
              size: "small",
              variant: "standard",
              sx: { width: "250px" },
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
              placeholder: "Room/Reference Number",
            }}
            label=""
          />
          <SizedBox width={2.5} />
          <Tooltip title="Export Complains">
            <IconButton size="small">
              <FlatIcons.FcPrint />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <SizedBox height={1.5} />
      <Box>
        <TableTemplate header={KeylogsTableHeader}>
          <React.Fragment>
            {Array.from({ length: 45 }).map(() => (
              <CustomTableRow
                index={Math.round(Math.random() * 10)}
                key={Math.random() + Date.now().toString()}
              >
                <CustomTableCell
                  content={
                    Boolean((Math.round(Math.random()) * 5) % 2)
                      ? "CheckIn"
                      : "CheckOut"
                  }
                />
                <CustomTableCell props={{ align: "center" }} content={"A30"} />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={"UE20040117"}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={"Kunjam Bismark"}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={moment().format("DD/MM/YYYY  h:m a")}
                />
                <CustomTableCell
                  props={{ align: "center" }}
                  content={"Oka Alexander"}
                />
              </CustomTableRow>
            ))}
          </React.Fragment>
        </TableTemplate>
      </Box>
    </Box>
  );
}
