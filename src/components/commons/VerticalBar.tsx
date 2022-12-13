import React from "react";
import theme from "../../styles/theme";
import Span from "../utils/Span";

const VerticalBar = (): JSX.Element => {
  return (
    <Span padding="0 0.2rem" color={theme.colors.gray}>
      |
    </Span>
  );
};

export default VerticalBar;
