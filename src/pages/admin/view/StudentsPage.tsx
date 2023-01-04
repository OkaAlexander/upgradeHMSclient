import { SummarizeOutlined } from "@mui/icons-material";
import { Box, Chip, Container, Divider, TableRow } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomIconButton,
  CustomTableCell,
  Input,
  Row,
  SizedBox,
  Text,
} from "../../../components";
import { GetHostelsThunk, GetStudentsThunk } from "../../../functions/thunk";
import StudentModel from "../../../model/StudentModel";
import { MdExpandMore } from "react-icons/md";
import {
  ExportToExcel,
  PageHeader,
  StudentHostelSummary,
  StudentServicesMenu,
} from "../../../shared";
import { searchStudent } from "../../../util";
import { TableTemplate } from "../../../views";
import { StudentsTableHeader } from "../../data";
import FlatIcons from "../../../constants/icons";
import { GetHostelInfoById } from "../../service";
import { FcRefresh } from "react-icons/fc";
import { RiFileExcel2Line } from "react-icons/ri";

export default function StudentsPage() {
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.StudentsReducer);
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [srch, setSrch] = useState<string>("");
  const [Students, setStudents] = useState<StudentModel[]>([]);
  console.log(`student lenth is${Students.length}`);

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
      <PageHeader title="Students Page">
        <>
          <Chip
            size="small"
            label="Refresh"
            onClick={() => {
              dispatch(GetStudentsThunk());
              dispatch(GetHostelsThunk());
            }}
            avatar={<FcRefresh />}
            sx={(theme) => ({
              borderRadius: 0,
              background: theme.palette.background.paper,
              marginRight: theme.spacing(4),
            })}
          />
          <Input
            label=""
            props={{
              placeholder: "search by index,ref,phone....",
              variant: "standard",
              type: "search",
              onChange: (e) => setSrch(e.target.value),
            }}
          />
          <SizedBox width={0.5} />
          <ExportToExcel
            fileName="HostelStudents"
            dataSource={students.map((s) => {
              return {
                Name: s.studentName,
                PhoneNumber: s.phoneNumber,
                RefereceNumber: s.referenceNumber,
                EmailAddress: s.email,
                RoomNumber: s.roomNumber,
                Gender: s.gender,
                Program: s.programme,
                HostelName: GetHostelInfoById(hostels, s.hostelId).hostelName,
              };
            })}
          >
            <CustomIconButton Icon={RiFileExcel2Line} />
          </ExportToExcel>
        </>
      </PageHeader>

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
              <Text
                props={{ sx: (theme) => ({ fontSize: theme.spacing(3) }) }}
                text="Summary"
              />,
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
                  (std) => std.hostelId === hostel.hostelId
                )}
                hostel={hostel}
                key={hostel.hostelId}
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
          <Container>
            <TableTemplate header={StudentsTableHeader}>
              {Students.length > 0 &&
                Students.map((student, index) => (
                  <TableRow
                    sx={(theme) => ({
                      backgroundColor: index % 2 === 0 ? "#fefefe" : "#f0f0f0",
                    })}
                    key={student.referenceNumber}
                  >
                    <CustomTableCell content={student.studentName} />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={student.referenceNumber}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={student.roomNumber}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={student.gender}
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={
                        GetHostelInfoById(hostels, student.hostelId).hostelName
                      }
                    />
                    <CustomTableCell
                      props={{ align: "center" }}
                      content={<CustomIconButton Icon={MdExpandMore} />}
                    />
                  </TableRow>
                ))}
            </TableTemplate>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
