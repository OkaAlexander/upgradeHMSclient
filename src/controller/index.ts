import Axios from "axios";
import configuration from "../configurations/configurations";

interface IProps {
  url: string;
  data?: any;
  baseUrl?: string;
  file?: boolean;
}

function Post<T>({ url, data, file }: IProps) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: configuration.baseURL,
        data,
        url,
        method: "post",
        headers: {
          contentType: file ? "multipart/form-data" : "application/json",
        },
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error?.response?.data || error?.message || error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

interface IGetProps {
  url?: string;
}
function Get<T>({ url }: IGetProps) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: configuration.baseURL,
        url,
        method: "get",
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) =>
          reject(error?.response?.data || error?.message || error)
        );
    } catch (error) {
      reject(error);
    }
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Get,
  Post,
};
