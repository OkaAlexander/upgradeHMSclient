import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons";

export interface IMenubarRoute {
  route?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
  title: string;
}
