import {
  CardMembershipOutlined,
  ClearOutlined,
  GroupOutlined,
  HomeOutlined,
  SettingsOutlined,
  SummarizeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  BigText,
  Expanded,
  Row,
  SizedBox,
  SmallText,
} from "../../../components";
import { appColors } from "../../../constants/colors";
import { StudentsTableHeader } from "../../../data";
import { GetHostelsThunk, GetStudentsThunk } from "../../../functions/thunk";
import StudentModel from "../../../model/StudentModel";
import { StudentHostelSummary, StudentServicesMenu } from "../../../shared";
import { searchStudent } from "../../../util";

export default function StudentsPage() {
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.StudentsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [srch, setSrch] = useState<string>("");
  const [Students, setStudents] = useState<StudentModel[]>([]);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(GetStudentsThunk());
    dispatch(GetHostelsThunk());
  }, []);

  useEffect(() => {
    setStudents(searchStudent(students, srch));
  }, [students]);

  useEffect(() => {
    setStudents(searchStudent(students, srch));
  }, [srch]);
  return (
    <Box
      sx={(theme) => ({
        overflow: "hidden",
        height: "100vh",
      })}
    >
      <StudentServicesMenu
        anchorlEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
          padding: theme.spacing(1),
          borderRadius: 0,
          width: "100%",
          border: "1px solid rgba(211,211,211,1)",
        })}
      >
        <Box></Box>
        <Expanded />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1.5),
          })}
        >
          <SizedBox width={1} />
          <TextField
            value={srch}
            onChange={(e) => setSrch(e.target.value)}
            variant="outlined"
            size="small"
            label="search student"
          />
          <SizedBox width={1} />
          <Chip
            sx={(theme) => ({
              borderRadius: theme.spacing(0.5),
              boxShadow: theme.shadows[1],
            })}
            onClick={handleClick}
            label={<SmallText text="Services" />}
            avatar={<SettingsOutlined fontSize="small" />}
          />
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        })}
      >
        <Box
          sx={(theme) => ({
            width: 250,
            background: "#f0f0f0",
            overflow: "hidden",
            height: "100%",
          })}
        >
          <Row
            padding={{ x: 1, y: 0.85 }}
            children={[
              <SummarizeOutlined />,
              <SizedBox width={0.85} />,
              <BigText fontsize={3} text="Summary" />,
            ]}
          />
          <Divider />
          <Box
            sx={(theme) => ({
              overflowX: "hidden",
              overflowY: "auto",
              height: "100%",
            })}
          >
            {hostels.map((hostel) => (
              <StudentHostelSummary
                students={Students.filter(
                  (std) => std.HostelID === hostel.HostelID
                )}
                hostel={hostel}
                key={hostel.HostelID}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            height: "100%",
          })}
        >
          <TableContainer
            sx={(theme) => ({
              borderRadius: 0,
              height: "100%",
            })}
          >
            <Table>
              <TableHead
                component={Paper}
                sx={(theme) => ({
                  position: "sticky",
                  top: 0,
                  backgroundColor: theme.palette.common.white,
                  zIndex: 1,
                })}
              >
                <TableRow>
                  {StudentsTableHeader.map((header) => (
                    <TableCell key={header}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody
                sx={(theme) => ({
                  width: "100%",
                  overflowX: "hidden",
                  overflowY: "scroll",
                  height: "100%",
                })}
              >
                {Students.map((student) => (
                  <TableRow
                    sx={(theme) => ({
                      backgroundColor: Boolean(
                        student.StudentName === srch ||
                          student.ReferenceNumber === srch
                      )
                        ? "rgba(211,211,211,0.5)"
                        : "",
                    })}
                    key={student.ReferenceNumber}
                  >
                    <TableCell>{student.StudentName}</TableCell>
                    <TableCell>{student.ReferenceNumber}</TableCell>
                    <TableCell>{student.RoomNumber}</TableCell>
                    <TableCell>{student.Gender}</TableCell>
                    <TableCell>{student.HostelID}</TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <CardMembershipOutlined fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
