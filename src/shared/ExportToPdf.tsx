import { Box, IconButton } from "@mui/material";
import React from "react";
import { FcPrint } from "react-icons/fc";
import { useReactToPrint } from "react-to-print";

interface IProps {
  dataRef: any;
}
export default function ExportToPdf({ dataRef }: IProps) {
  const handlePrintToPdf = useReactToPrint({
    content: () => dataRef.current,
  });
  return (
    <Box>
      <IconButton onClick={handlePrintToPdf} size="small">
        <FcPrint />
      </IconButton>
      <div ref={dataRef} hidden={false} />
    </Box>
  );
}
