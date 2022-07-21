import { Container } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { AppbarView, MenuBarView, MobileMenu } from "../../views/frontend";

export default function DashboardPage() {
  const navigation = useNavigate();
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  const { student } = useAppSelector((state) => state.StudentReducer);

  function handleMobileMenu(event: MouseEvent<HTMLButtonElement>) {
    setMobileMenu(event.currentTarget);
  }

  useEffect(() => {
    !student && navigation("..");
  }, [student]);
  return (
    <Container
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        overflow: "hidden",
      })}
    >
      <MobileMenu
        handleClose={() => setMobileMenu(null)}
        anchorEl={mobileMenu}
      />
      <AppbarView />
      <MenuBarView handleMobileMenu={handleMobileMenu} />
    </Container>
  );
}
