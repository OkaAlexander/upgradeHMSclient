import { Modal } from "@mui/material";
import * as React from "react";

interface ILoader {
  open: boolean;
}
export default function Loader({ open }: ILoader) {
  return (
    <Modal
      style={{
        flex: 1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 100100,
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(1px)",
        outline: "none",
        borderStyle: "none",
      }}
      open={open}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "transparent",
          outline: "none",
          borderStyle: "none",
        }}
      >
        <span className="loader"></span>
      </div>
    </Modal>
  );
}
