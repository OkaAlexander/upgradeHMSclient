import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons";

export interface IHomeNavRoute {
  route?: string;
  title: string;
}

export interface ISidebarRoute {
  route?: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
}

export interface ITableHeader {
  title: string;
  align: any;
}
