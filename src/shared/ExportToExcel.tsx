import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { CSVLink } from "react-csv";
import { FcPrint } from "react-icons/fc";

interface IProps {
  dataSource: any[];
  fileName: string;
  children?: ReactNode;
}
export default function ExportToExcel({
  dataSource,
  fileName,
  children,
}: IProps) {
  return (
    <Box>
      <CSVLink filename={`${fileName}.csv`} data={dataSource}>
        {children ? children : <FcPrint />}
      </CSVLink>
    </Box>
  );
}
