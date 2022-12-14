/* eslint-disable import/order */
import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

interface HorizontalBarStyleProps {
  thick: number | undefined;
}

interface HorizontalBarProps {
  thick?: number;
}

const HorizontalBarWrapper = styled.div`
  padding: 1rem 0;
`;

const HorizontalBarStyle = styled.hr<HorizontalBarStyleProps>`
  border: 0;
  background-color: ${theme.colors.lightGray};
  height: ${(props): string => (props.thick ? `${props.thick}rem` : `0.1rem`)};
`;

const HorizontalBar = (props: HorizontalBarProps): JSX.Element => {
  const { thick } = props;

  return (
    <HorizontalBarWrapper>
      <HorizontalBarStyle thick={thick} />
    </HorizontalBarWrapper>
  );
};

export default HorizontalBar;
