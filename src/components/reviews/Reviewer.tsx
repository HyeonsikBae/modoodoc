import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { CustomerType } from "../../types/dto";
import VerticalBar from "../commons/VerticalBar";

type FlexProps = {
  flexDirection: string;
  justifyContent?: string;
  alignItems?: string;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props): string => (props ? props.flexDirection : "")};
  justify-content: ${(props): string =>
    props.justifyContent ? props.justifyContent : ""};
  align-items: ${(props): string => (props.alignItems ? props.alignItems : "")};
  font-size: 0.8rem;
`;

const ImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.gray};
  border-radius: 50%;
  margin: 0.5rem;
`;

const Image = styled.img`
  width: 70%;
  height: 70%;
`;

interface ReviewerProps {
  customer: CustomerType;
  registered_at: string;
}

const Reviewer = (props: ReviewerProps): JSX.Element => {
  const { customer, registered_at } = props;

  return (
    <div>
      <Flex flexDirection="row" alignItems="center">
        <ImageWrapper>
          <Image src={customer.profile_image} alt={customer.nickname} />
        </ImageWrapper>
        <Flex flexDirection="column">
          <span>{customer.nickname}</span>
          <Flex flexDirection="row">
            <img src="/assets/pen-solid.svg" alt="edit" />
            <span>{customer.review_cnt}</span>
            <span>{customer.liked_cnt}</span>
            <VerticalBar />
            <span>{`${registered_at.slice(0, 4)}.
            ${registered_at.slice(5, 7)}.
            ${registered_at.slice(8, 10)} 등록`}</span>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Reviewer;
