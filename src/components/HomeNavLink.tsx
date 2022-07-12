import { Button } from "@mui/material";
import React from "react";
import { IHomeNavRoute } from "../pages/interface";
import { useLocation } from "react-router-dom";

interface IProps {
  route: IHomeNavRoute;
  handleClick?: () => void;
}
export default function HomeNavLink({ route, handleClick }: IProps) {
  const location = useLocation();
  return (
    <Button
      size="small"
      variant="text"
      color="primary"
      sx={(theme) => ({
        textTransform: "none",
        backgroundColor: Boolean(location.pathname === "/" + route.route)
          ? "#fff"
          : "transparent",
      })}
      onClick={handleClick}
    >
      {route.title}
    </Button>
  );
}
