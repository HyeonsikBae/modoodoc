import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import BaseModal from "../commons/BaseModal";
import Sample from "../commons/Sample";
import Flex from "../utils/Flex";
import Span from "../utils/Span";

const CleanSystemWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 1rem;
`;

const CleanSystem = (): JSX.Element => {
  return (
    <CleanSystemWrapper>
      <Flex direction="row" justifyContent="space-between">
        <Flex direction="column">
          <Span>
            <Span
              color={theme.colors.purple}
              fontSize="0.8rem"
              fontWeight="bold"
            >
              영수증 인증
            </Span>
            <Span fontSize="0.8rem">리뷰는</Span>
          </Span>
          <Span fontSize="0.8rem">
            클린 시스템을 통해 방문이 인증된 후기입니다.
          </Span>
        </Flex>
        <BaseModal
          buttonElement={<Span fontSize="0.8rem">클린시스템 보기</Span>}
        >
          <Sample />
        </BaseModal>
      </Flex>
    </CleanSystemWrapper>
  );
};

export default CleanSystem;
