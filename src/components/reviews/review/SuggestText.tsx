import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

type TextStyleProps = {
  suggest: boolean;
};

const TextStyle = styled.span<TextStyleProps>`
  color: ${(props): string =>
    props.suggest ? theme.colors.purple : theme.colors.gray};
`;

interface SuggestTextProps {
  suggest: boolean;
}

const SuggestText = (props: SuggestTextProps): JSX.Element => {
  const { suggest } = props;

  return (
    <TextStyle suggest={suggest}>
      {suggest ? `재방문 의사 있음` : `재방문 의사 없음`}
    </TextStyle>
  );
};

export default SuggestText;
