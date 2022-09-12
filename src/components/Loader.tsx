import { Backdrop, Modal } from "@mui/material";
import * as React from "react";

interface ILoader {
  open: boolean;
}
export default function Loader({ open }: ILoader) {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 18449 }} open={open}>
      <span className="loader"></span>
    </Backdrop>
  );
}
