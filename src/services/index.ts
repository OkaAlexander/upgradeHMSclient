import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/types";
import ResponseModel from "../model/ResponseModel";

interface IHandleNotifier {
  response: ResponseModel;
  handleClose: () => void;
}
export function handleNotifier({ handleClose, response }: IHandleNotifier) {
  Boolean(response.message) &&
    toast.success(response.message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      onClose: handleClose,
    });

  Boolean(response.error) &&
    toast.error(response.error, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      onClose: handleClose,
    });
}
