/* eslint-disable import/order */
import React from "react";
import styled from "styled-components";

interface FlexStyleProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  border?: string;
  width?: string;
  height?: string;
}

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  border?: string;
  children?: any | any[];
  width?: string;
  height?: string;
}

const FlexStyle = styled.div<FlexStyleProps>`
  display: flex;
  flex-direction: ${(props): string =>
    props.direction ? `${props.direction}` : ""};
  border: 1px solid black;
  justify-content: ${(props): string =>
    props.justifyContent ? `${props.justifyContent}` : ""};
  align-items: ${(props): string =>
    props.alignItems ? `${props.alignItems}` : ""};
  border: ${(props): string => (props.border ? `${props.border}` : "0px")};
  width: ${(props): string => (props.width ? `${props.width}` : "")};
  height: ${(props): string => (props.height ? `${props.height}` : "")};
`;

const Flex = (props: FlexProps): JSX.Element => {
  const {
    direction,
    justifyContent,
    alignItems,
    children,
    border,
    width,
    height,
  } = props;
  return (
    <FlexStyle
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      border={border}
      width={width}
      height={height}
    >
      {children}
    </FlexStyle>
  );
};

export default Flex;
