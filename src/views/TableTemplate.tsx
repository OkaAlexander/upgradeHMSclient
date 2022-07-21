import React, { ReactNode } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ITableHeader } from "../pages/interface";
import { CustomTableCell } from "../components";

interface IProps {
  header: ITableHeader[];
  children: ReactNode;
}
export default function TableTemplate({ header, children }: IProps) {
  return (
    <TableContainer
      elevation={2}
      component={Paper}
      sx={(theme) => ({
        paddingBottom: theme.spacing(15),
        height: "80vh",
        overflowX: "auto",
        borderRadius: 0,
        background: "#f5f5f5",
      })}
    >
      <Table>
        <TableHead
          sx={(theme) => ({
            position: "sticky",
            background: theme.palette.common.white,
            top: 0,
            zIndex: 2019,
          })}
        >
          <TableRow
            sx={(theme) => ({
              boxShadow: theme.shadows[1],
            })}
          >
            {header.map((head) => (
              <CustomTableCell
                content={head.title}
                key={head.title}
                props={{
                  align: head.align,
                  sx: (theme) => ({
                    padding: theme.spacing(1),
                    background: "#f0f0f0",
                  }),
                }}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
