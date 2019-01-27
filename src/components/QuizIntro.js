import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const TextCenter = styled.div`
  width: 90%;
  max-width: 30rem;
  text-align: center;
`;

const QuizIntro = props => {
  return (
    <Wrapper>
      <TextCenter>{props.children}</TextCenter>
    </Wrapper>
  );
};

export default QuizIntro;
