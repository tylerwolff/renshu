import React, { Component } from 'react';
import styled from '@emotion/styled';

// UI elements
import Button from './Button';
import ProgressBar from './ProgressBar';
import TextInput from './TextInput';

import { ReactComponent as ChevronRight } from '../assets/round-chevron_right-24px.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  margin-bottom: 3em;
  text-align: center;
`;

const Prompt = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 8rem;
  line-height: 1;
  text-align: center;
`;

const Hint = styled.p`
  margin: 0 0 2rem 0;
  color: #999;
`;

class VocabularyQuiz extends Component {
  static defaultProps = {
    placeholder: 'Enter English meaning',
    question: 'hiragana',
    hint: 'romaji',
  };

  constructor(props) {
    super(props);

    const words = [...props.words];

    this.state = {
      words,
      initialLength: words.length,
      currentWord: words[0],
      answer: '',
      inputPlaceholder: props.placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value.toLowerCase();
    const { currentWord } = this.state;
    const pattern = new RegExp(currentWord.matches);

    if (pattern.test(val)) {
      const remainingCharacters = this.state.words.slice(1);
      return this.setState({
        words: remainingCharacters,
        currentWord: remainingCharacters[0],
        answer: '',
      });
    }

    this.setState({ answer: val });
  }

  render() {
    const {
      words,
      currentWord,
      answer,
      initialLength,
      inputPlaceholder,
    } = this.state;
    const { placeholder, question, hint } = this.props;
    const progress = ((initialLength - words.length) / initialLength) * 100;

    return (
      <>
        <ProgressBar progress={progress} />
        <Wrapper>
          <Content>
            {currentWord ? (
              <>
                <Prompt>{currentWord[question]}</Prompt>
                <Hint>{currentWord[hint]}</Hint>
                <TextInput
                  type="text"
                  value={answer}
                  onChange={this.handleChange}
                  placeholder={inputPlaceholder}
                  onBlur={() =>
                    this.setState({ inputPlaceholder: placeholder })
                  }
                  onFocus={() => this.setState({ inputPlaceholder: '' })}
                  autoFocus={true}
                />
              </>
            ) : (
              <>
                <Prompt>すごいよ!</Prompt>
                <Button onClick={() => window.location.reload()}>
                  Start again <ChevronRight />
                </Button>
              </>
            )}
          </Content>
        </Wrapper>
      </>
    );
  }
}

export default VocabularyQuiz;
