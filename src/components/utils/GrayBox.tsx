import React from "react";
import styled from "styled-components";

type GrayBoxStyleProps = {
  width: string;
  height: string;
  margin: string;
  padding: string;
  backgroundColor: string;
};

const GrayBoxStyle = styled.div<GrayBoxStyleProps>`
  display: flex;
  width: ${(props): string => (props.width ? props.width : "")};
  height: ${(props): string => (props.height ? props.height : "")};
  margin: ${(props): string => (props.margin ? props.margin : "")};
  padding: ${(props): string => (props.padding ? props.padding : "")};
  background-color: ${(props): string =>
    props.backgroundColor ? props.backgroundColor : ""};
`;

interface GrayBoxProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  children: JSX.Element[] | string[] | number[] | JSX.Element | string | number;
}

const GrayBox = (props: GrayBoxProps): JSX.Element => {
  const {
    width = "100%",
    height = "100%",
    margin = "0",
    padding = "0",
    backgroundColor = "grey",
    children,
  } = props;
  return (
    <GrayBoxStyle
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </GrayBoxStyle>
  );
};

export default GrayBox;
