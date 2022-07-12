import { Chip, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface IProps {
  title: string;
  handleClick: () => void;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  square?: boolean;
}
export default function CustomChip({
  title,
  handleClick,
  Icon,
  square,
}: IProps) {
  return (
    <Chip
      onClick={handleClick}
      sx={(theme) => ({
        margin: (theme) => theme.spacing(0, 1),
        background: "#f0f0f0",
        borderRadius: square ? theme.spacing(0.5) : theme.spacing(2),
      })}
      label={<Typography variant="body2">{title}</Typography>}
      avatar={<Icon fontSize="small" />}
    />
  );
}
