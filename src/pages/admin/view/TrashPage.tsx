import { Box, Container, setRef } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CustomIconButton,
  CustomInput,
  CustomTableCell,
  CustomTableRow,
  SizedBox,
} from "../../../components";
import BigText from "../../../components/Text";
import FlatIcons from "../../../constants/icons";
import { GetTrashThunk } from "../../../functions/get";
import { TableTemplate } from "../../../views";
import { BookingsTableHeader } from "../../data";
import * as Feather from "react-icons/fi";
import { BookingActionMenu } from "../../../shared";
import { DeclineBookingThunk } from "../../../functions/post";
import { GetHostelInfoById, SearchBookingInfo } from "../../service";
import { GetHostelsThunk } from "../../../functions/thunk";
import TrashModel from "../../../model/TrashModel";
import { responseFail } from "../../../features/slice/ResponseReducer";

export default function TrashPage() {
  const { bookings } = useAppSelector((state) => state.BookingsReducer);
  const navigation = useNavigate();
  const { hostels } = useAppSelector((state) => state.HostelsReducer);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [action, setAction] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const [Bookings, setBookings] = useState<TrashModel[]>([]);

  function handleAction(event: MouseEvent<HTMLButtonElement>) {
    setAction(event.currentTarget);
  }

  function handleActionClose(response: number) {
    if (response === 0) {
    }
    if (response === 1) {
      navigation(`/admin/home/trash/id=${referenceNumber}`);
    }
    if (response === -1) {
      const info = bookings.find((b) => b.referenceNumber === referenceNumber);
      if (info) {
        dispatch(DeclineBookingThunk(info));
        dispatch(GetHostelsThunk());
      }
    }
    setAction(null);
  }

  useEffect(() => {
    dispatch(GetTrashThunk());
  }, []);

  return (
    <Container>
      <BookingActionMenu handleClose={handleActionClose} anchorEl={action} />
      <Box
        sx={(theme) => ({
          padding: theme.spacing(1.5),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderRadius: 0,
          borderBottom: "1px solid #d0d0d0",
        })}
      >
        <Box
          sx={(theme) => ({
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: theme.spacing(0, 2),
          })}
        >
          <FlatIcons.FcReadingEbook />
          <SizedBox width={1} />
          <BigText text="Recyle Bin" />
        </Box>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          })}
        >
          <FlatIcons.FcPortraitMode />
          <SizedBox width={1} />
          {/* <CustomInput
            props={{
              variant: "standard",
              size: "small",
              sx: (theme) => ({ width: "150px" }),
              placeholder: "search ....",
            }}
            label=""
            handleChange={(event) => {
              const results = SearchBookingInfo(bookings, event.target.value);
              if (Boolean(results.length > 0)) {
                setBookings(results);
              } else {
                setBookings(bookings);
              }
            }}
          /> */}
        </Box>
      </Box>
      <SizedBox height={1} />
      <Container>
        <TableTemplate header={BookingsTableHeader}>
          {Bookings.map((book, index) => (
            <CustomTableRow index={index}>
              <React.Fragment>
                <CustomTableCell
                  content={book.ReferenceNumber}
                  props={{ align: "left" }}
                />
                <CustomTableCell
                  content={
                    Boolean(book.IndexNumber)
                      ? book.IndexNumber
                      : book.ReferenceNumber
                  }
                  props={{ align: "left" }}
                />
                <CustomTableCell
                  content={book.StudentName}
                  props={{ align: "left" }}
                />

                <CustomTableCell
                  content={book.PhoneNumber}
                  props={{ align: "center" }}
                />
                <CustomTableCell
                  content={GetHostelInfoById(hostels, book.HostelId).hostelName}
                  props={{ align: "left" }}
                />
                <CustomTableCell
                  content={book.DateBooked}
                  props={{ align: "center" }}
                />

                <CustomTableCell
                  content={
                    <CustomIconButton
                      handleClick={(res) => {
                        handleAction(res);
                        setReferenceNumber(book.ReferenceNumber);
                      }}
                      Icon={Feather.FiMoreVertical}
                    />
                  }
                  props={{ align: "center" }}
                />
              </React.Fragment>
            </CustomTableRow>
          ))}
        </TableTemplate>
      </Container>
    </Container>
  );
}
