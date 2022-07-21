import { GroupOutlined, HomeOutlined } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import React from "react";
import { Text, Expanded, Row, SizedBox, SmallText } from "../components";
import { appColors } from "../constants/colors";
import HostelModel from "../model/HostelModel";
import StudentModel from "../model/StudentModel";
import { getStudentsByGender } from "../util";

interface IProps {
  hostel: HostelModel;
  students: StudentModel[];
}
export default function StudentHostelSummary({ hostel, students }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(1.5, 0.5),
        boxShadow: theme.shadows[1],
        padding: theme.spacing(0.5),
      })}
    >
      <Row
        padding={{ x: 1, y: 0.5 }}
        children={[
          <HomeOutlined fontSize="small" htmlColor={appColors.darkWine} />,
          <SizedBox width={0.5} />,
          <Text
            text={hostel.hostelName}
            props={{ sx: (theme) => ({ color: appColors.darkWine }) }}
          />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0.25 }}
        children={[
          <GroupOutlined fontSize="small" />,
          <SmallText text="Male" />,
          <Expanded />,
          <SmallText text={getStudentsByGender(students).length.toString()} />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0.25 }}
        children={[
          <GroupOutlined fontSize="small" />,
          <SmallText text="Female" />,
          <Expanded />,
          <SmallText
            text={getStudentsByGender(students, "Female").length.toString()}
          />,
        ]}
      />
      <Divider />
      <Row
        padding={{ x: 1, y: 0.25 }}
        children={[
          <GroupOutlined fontSize="small" />,
          <SmallText text="Total" />,
          <Expanded />,
          <SmallText text={students.length.toString()} />,
        ]}
      />
    </Box>
  );
}
