import { Backdrop, Modal } from "@mui/material";
import * as React from "react";

interface ILoader {
  open: boolean;
}
export default function Loader({ open }: ILoader) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <span className="loader"></span>
    </Backdrop>
  );
}
