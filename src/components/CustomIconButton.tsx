import { IconButton, IconButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { MouseEvent } from "react";
import { IconType } from "react-icons";

interface IProps {
  props?: IconButtonProps;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function CustomIconButton({ props, Icon, handleClick }: IProps) {
  return (
    <IconButton onClick={handleClick} {...props}>
      <Icon />
    </IconButton>
  );
}
