import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { CustomerType } from "../../../types/dto";
import VerticalBar from "../../commons/VerticalBar";
import Flex from "../../utils/Flex";
import Span from "../../utils/Span";

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

const ProfileImage = styled.img`
  width: 70%;
  height: 70%;
`;

const IconImage = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;

interface ReviewerProps {
  customer: CustomerType;
  registered_at: string;
}

const Reviewer = (props: ReviewerProps): JSX.Element => {
  const { customer, registered_at } = props;

  return (
    <div>
      <Flex direction="row" alignItems="center">
        <ImageWrapper>
          <ProfileImage src={customer.profile_image} alt={customer.nickname} />
        </ImageWrapper>
        <Flex direction="column">
          <Span fontSize="0.8rem">{customer.nickname}</Span>
          <Flex direction="row" alignItems="center">
            <IconImage src="images/pen.png" alt="pen" />
            <Span fontSize="0.8rem">&nbsp;{customer.review_cnt}</Span>
            &nbsp;
            <IconImage src="images/heart.png" alt="pen" />
            <Span fontSize="0.8rem">&nbsp;{customer.liked_cnt}</Span>
            <VerticalBar />
            <Span fontSize="0.8rem">{`${registered_at.slice(0, 4)}.
            ${registered_at.slice(5, 7)}.
            ${registered_at.slice(8, 10)} 등록`}</Span>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Reviewer;
