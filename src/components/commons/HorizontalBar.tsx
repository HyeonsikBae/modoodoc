import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const HorizontalBarWrapper = styled.div`
  padding: 1rem 0;
`;

type HorizontalBarStyleProps = {
  thick: number | undefined;
};

const HorizontalBarStyle = styled.hr<HorizontalBarStyleProps>`
  border: 0;
  background-color: ${theme.colors.lightGray};
  height: ${(props): string => (props.thick ? `${props.thick}rem` : `0.1rem`)};
`;

interface HorizontalBarProps {
  thick?: number;
}

const HorizontalBar = (props: HorizontalBarProps): JSX.Element => {
  const { thick } = props;

  return (
    <HorizontalBarWrapper>
      <HorizontalBarStyle thick={thick} />
    </HorizontalBarWrapper>
  );
};

export default HorizontalBar;
