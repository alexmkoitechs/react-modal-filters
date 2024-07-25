import React from "react";
import * as Styled from "./styled";

const Button = ({
  type,
  color,
  label,
  onClick,
  disabled,
  hoverColor
}) => (
  <Styled.Button
    type={type}
    color={color}
    onClick={onClick}
    disabled={disabled}
    $hoverColor={hoverColor}
  >
    {label}
  </Styled.Button>
);

export default Button;
