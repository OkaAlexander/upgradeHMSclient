import { Chip, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface IProps {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  handleClick: () => void;
}
export default function ChipButton({ title, Icon, handleClick }: IProps) {
  return (
    <Chip
      onClick={handleClick}
      sx={{
        borderRadius: (theme) => theme.spacing(0.5),
        margin: (theme) => theme.spacing(0, 1),
        background: (theme) => theme.palette.common.white,
        boxShadow: (theme) => theme.shadows[1],
      }}
      label={<Typography variant="body1">{title}</Typography>}
      avatar={<Icon fontSize="small" />}
    />
  );
}
