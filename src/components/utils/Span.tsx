import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface SpanStyleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
}

const SpanStyle = styled.div<SpanStyleProps>`
  font-size: ${(props): string =>
    props.fontSize ? `${props.fontSize}` : "1rem"};
  color: ${(props): string =>
    props.color ? `${props.color}` : `${theme.colors.black}`};
  font-weight: ${(props): string => (props.color ? `${props.fontWeight}` : "")};
  padding: ${(props): string => (props.padding ? `${props.padding}` : "")};
  margin: ${(props): string => (props.margin ? `${props.margin}` : "")};
`;

interface SpanProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  children: any;
}

const Span = (props: SpanProps): JSX.Element => {
  const { fontSize, color, fontWeight, children, padding, margin } = props;
  return (
    <SpanStyle
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      padding={padding}
      margin={margin}
    >
      {children}
    </SpanStyle>
  );
};

export default Span;
