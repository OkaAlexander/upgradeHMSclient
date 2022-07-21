import { TableRow, TableRowProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  props?: TableRowProps;
  children: ReactNode;
  index: number;
}
export default function CustomTableRow({ index, children, props }: IProps) {
  return (
    <TableRow
      sx={(theme) => ({
        backgroundColor: index % 2 === 0 ? "#fefefe" : "#f0f0f0",
      })}
    >
      {children}
    </TableRow>
  );
}
