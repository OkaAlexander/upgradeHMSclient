import React from "react";
import Router from "./router/Router";
import { Box, ThemeProvider } from "@mui/material";
import { themeConfig } from "./configurations/configurations";
import { Loader } from "./components";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearResponse } from "./features/slice/ResponseReducer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const dispatch = useAppDispatch();
  const { loading, error, message } = useAppSelector(
    (state) => state.ResponseReducer
  );

  const handleCloseNotifier = () => {
    dispatch(clearResponse());
  };

  function HandleNotifier() {
    Boolean(message) &&
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        onClose: handleCloseNotifier,
        toastId: "success",
      });

    Boolean(error) &&
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        onClose: handleCloseNotifier,
        toastId: "error",
      });

    return <Box></Box>;
  }
  return (
    <ThemeProvider theme={themeConfig}>
      {Boolean(error || message) && HandleNotifier()}
      <ToastContainer draggable={true} autoClose={3000} />
      <Loader open={loading} />
      <Router />
    </ThemeProvider>
  );
}
