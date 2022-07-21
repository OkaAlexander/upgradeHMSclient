import { TableCell, TableCellProps } from "@mui/material";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface IProps {
  props?: TableCellProps;
  content: ReactNode | string;
}
export default function CustomTableCell({ props, content }: IProps) {
  return (
    <TableCell
      sx={(theme) => ({ padding: theme.spacing(0.25, 1.5) })}
      {...props}
    >
      {content}
    </TableCell>
  );
}
