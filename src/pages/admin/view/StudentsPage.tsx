import { SummarizeOutlined } from "@mui/icons-material";
import { Box, Container, Divider, TableRow } from "@mui/material";
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
  PageHeader,
  StudentHostelSummary,
  StudentServicesMenu,
} from "../../../shared";
import { searchStudent } from "../../../util";
import { TableTemplate } from "../../../views";
import { StudentsTableHeader } from "../../data";
import FlatIcons from "../../../constants/icons";

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
      <PageHeader title="Students Page">
        <>
          <Input
            label=""
            props={{
              placeholder: "search...",
              variant: "standard",
              type: "search",
            }}
          />
          <SizedBox width={0.5} />
          <CustomIconButton Icon={FlatIcons.FcPrint} />
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
                  (std) => std.hostelID === hostel.hostelId
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
              {Students.map((student, index) => (
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
                    content={student.hostelID}
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
