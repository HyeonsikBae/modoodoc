/* eslint-disable import/order */
import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

interface SectionStyleProps {
  padding?: string;
  backgroundColor?: string;
}

interface SectionProps {
  children: any;
  padding?: string;
  backgroundColor?: string;
}

const SectionStyle = styled.section<SectionStyleProps>`
  padding: ${(props): string => (props.padding ? `${props.padding}` : `0`)};
  background-color: ${(props): string =>
    props.backgroundColor
      ? `${props.backgroundColor}`
      : `${theme.colors.white}`};
`;

const Section = (props: SectionProps): JSX.Element => {
  const { children, padding, backgroundColor } = props;

  return (
    <SectionStyle padding={padding} backgroundColor={backgroundColor}>
      {children}
    </SectionStyle>
  );
};

export default Section;
