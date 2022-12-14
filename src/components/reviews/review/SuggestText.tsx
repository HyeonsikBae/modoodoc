/* eslint-disable import/order */
import React from "react";
import theme from "../../../styles/theme";
import Span from "../../utils/Span";

interface SuggestTextProps {
  suggest: boolean;
}

const SuggestText = (props: SuggestTextProps): JSX.Element => {
  const { suggest } = props;

  return (
    <Span
      fontSize="0.8rem"
      color={suggest ? theme.colors.purple : theme.colors.gray}
    >
      {suggest ? `재방문 의사 있음` : `재방문 의사 없음`}
    </Span>
  );
};

export default SuggestText;
