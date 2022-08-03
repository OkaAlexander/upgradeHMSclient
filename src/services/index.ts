import { ChangeEvent } from "react";
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

export async function handleFilePicker(event: ChangeEvent<HTMLInputElement>) {
  let file: any = null;
  if (event.target.files && event.target.files.length > 0) {
    file = event.target.files[0];
  }
  return {
    path: file ? await generateImagePreviewPath(file) : "",
    file,
  };
}
export function generateImagePreviewPath(file: File) {
  return new Promise<any>(function (resolve, reject) {
    try {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        resolve(fileReader.result);
      });
      fileReader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
}
