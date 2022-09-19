import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { MenuItem, Stack, TextField } from "@mui/material";
import { ComplainsType, Problems } from "../../data";
import ComplainModel, { ComplainModelInfo } from "../../../model/ComplainModel";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  responseFail,
  responsePending,
  responseSuccess,
} from "../../../features/slice/ResponseReducer";
import controller from "../../../controller";
import { PostRoutes } from "../../../api";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddComplainView({ open, handleClose }: IProps) {
  const { student } = useAppSelector((state) => state.StudentReducer);
  const [complainInfo, setComplainInfo] =
    useState<ComplainModel>(ComplainModelInfo);
  const [problems, setProblems] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const probs = Problems.find((p) => p.title === complainInfo.problemType);
    if (probs) {
      setProblems(probs.faults);
    }
  }, [complainInfo.problemType]);

  async function HandleAddComplain() {
    try {
      dispatch(responsePending());
      if (student) {
        complainInfo.id = "new";
        complainInfo.academicYear = student.academicYear;
        complainInfo.roomNumber = student.roomNumber;
        complainInfo.compliantName = student.studentName;
        complainInfo.hostelId = student.hostelId;
      }
      const results = await controller.Post<string>({
        url: PostRoutes.complain_add,
        data: complainInfo,
      });
      dispatch(responseSuccess(results));
      setComplainInfo(ComplainModelInfo);
    } catch (error) {
      dispatch(responseFail(error));
    }
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Report Problem</DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-slide-description">
          Problem Details
        </DialogContentText>
        <Stack marginTop={2} width="100%" spacing={1.2}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Problem Type"
            select
            value={complainInfo.problemType}
            onChange={(e) =>
              setComplainInfo({ ...complainInfo, problemType: e.target.value })
            }
          >
            {Problems.map((c) => (
              <MenuItem value={c.title} key={c.title}>
                {c.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Problem"
            select
            value={complainInfo.problem}
            onChange={(e) =>
              setComplainInfo({ ...complainInfo, problem: e.target.value })
            }
          >
            {problems.map((p) => (
              <MenuItem value={p} key={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            multiline
            minRows={2}
            size="small"
            fullWidth
            label="Problem Description"
            onChange={(e) =>
              setComplainInfo({ ...complainInfo, description: e.target.value })
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            handleClose();
            HandleAddComplain();
          }}
          sx={(theme) => ({
            height: "25px",
            textTranform: "none",
          })}
        >
          Submit
        </Button>
        <Button
          sx={(theme) => ({
            height: "25px",
            textTranform: "none",
          })}
          color="error"
          variant="outlined"
          size="small"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
