import { createTheme } from "@mui/material";
import { appColors } from "../constants/colors";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: appColors.darkWine,
    },
    common: {
      black: appColors.black,
      white: appColors.white,
    },
    info: {
      main: appColors.yellow,
    },
    error: {
      main: appColors.firebrick,
    },
    divider: appColors.gray,
  },
});

const configuration = {
  remoteResource: "http://localhost:5243/",
  baseURL: "http://localhost:5243/api/",
  // baseURL: "https://hostelapp.uenr.edu.gh:444/API/hostel/",
  // remoteResource: "https://hostelapp.uenr.edu.gh:444/",
};

export default configuration;
