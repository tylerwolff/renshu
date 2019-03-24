import React from 'react';
import styled from '@emotion/styled';
import { Text, Button } from './ui';
import { ReactComponent as ChevronRight } from '../assets/round-chevron_right-24px.svg';

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
  const { name, instructions, onStart } = props;

  return (
    <Wrapper>
      <TextCenter>
        <h1>{name}</h1>
        <Text margin="0 0 2rem">{instructions}</Text>
        {props.children}
        <Button onClick={onStart}>
          Start quiz <ChevronRight />
        </Button>
      </TextCenter>
    </Wrapper>
  );
};

export default QuizIntro;
