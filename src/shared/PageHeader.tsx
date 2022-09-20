import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Text } from "../components";
import FlatIcons from "../constants/icons";

interface IProps {
  title: string;
  children?: ReactNode;
}
export default function PageHeader({ title, children }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(1),
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: theme.shadows[1],
        margin: theme.spacing(1, 0),
        width: "100%",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: theme.spacing(0, 1),
          flex: 1,
        })}
      >
        <FlatIcons.FcReading /> <Text text={title} />
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: theme.spacing(0, 1),
          flex: 1,
        })}
      >
        {children}
      </Box>
    </Box>
  );
}
