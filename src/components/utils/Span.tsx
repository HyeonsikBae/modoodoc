import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface SpanStyleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  whiteSpace?: string;
}

const SpanStyle = styled.span<SpanStyleProps>`
  font-size: ${(props): string =>
    props.fontSize ? `${props.fontSize}` : "1rem"};
  color: ${(props): string =>
    props.color ? `${props.color}` : `${theme.colors.black}`};
  font-weight: ${(props): string => (props.color ? `${props.fontWeight}` : "")};
  padding: ${(props): string => (props.padding ? `${props.padding}` : "")};
  margin: ${(props): string => (props.margin ? `${props.margin}` : "")};
  white-space: ${(props): string =>
    props.whiteSpace ? `${props.whiteSpace}` : ""};
`;

interface SpanProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  children: any;
  whiteSpace?: string;
}

const Span = (props: SpanProps): JSX.Element => {
  const { whiteSpace, fontSize, color, fontWeight, children, padding, margin } =
    props;
  return (
    <SpanStyle
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      padding={padding}
      margin={margin}
      whiteSpace={whiteSpace}
    >
      {children}
    </SpanStyle>
  );
};

export default Span;
