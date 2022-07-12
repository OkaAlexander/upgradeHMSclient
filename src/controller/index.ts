import Axios from "axios";
import configuration from "../configurations/configurations";

interface IProps {
  url: string;
  data?: any;
  method?: string;
  baseUrl?: string;
  file?: boolean;
}

function controller({ url, data, method, baseUrl, file }: IProps) {
  return new Promise(function (resolve, reject) {
    try {
      Axios({
        baseURL: baseUrl ? baseUrl : configuration.baseURL,
        method: method ? method : "post",
        data,
        url,
        headers: {
          contentType: file ? "multipart/form-data" : "application/json",
        },
      })
        .then((response) => {
          resolve(JSON.parse(response.data));
        })
        .catch((error) => {
          reject(error?.response?.data || error?.message);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export default controller;
