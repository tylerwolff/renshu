import React, { Component } from 'react';
import styled from '@emotion/styled';

// Character sets
import hiragana from '../lib/hiragana';
import katakana from '../lib/katakana';

// UI elements
import Button from './Button';
import ProgressBar from './ProgressBar';
import TextInput from './TextInput';

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
  margin: 0 0 2rem 0;
  font-size: 32vmin;
  line-height: 1;
  text-align: center;
`;

class Quiz extends Component {
  constructor(props) {
    super(props);

    // TODO: customize what can be tested per user
    const all = hiragana.concat(katakana).sort(() => 0.5 - Math.random());

    this.state = {
      all,
      initialLength: all.length,
      current: all[0],
      answer: '',
      inputPlaceholder: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;

    if (val === this.state.current.sound) {
      const remainingCharacters = this.state.all.slice(1);
      return this.setState({
        all: remainingCharacters,
        current: remainingCharacters[0],
        answer: '',
      });
    }

    this.setState({ answer: val });
  }

  render() {
    const {
      all,
      current,
      answer,
      initialLength,
      inputPlaceholder,
    } = this.state;
    const progress = ((initialLength - all.length) / initialLength) * 100;

    return (
      <>
        <ProgressBar progress={progress} />
        <Wrapper>
          <Content>
            {current ? (
              <>
                <Prompt>{current.character}</Prompt>
                <TextInput
                  type="text"
                  value={answer}
                  onChange={this.handleChange}
                  placeholder={inputPlaceholder}
                  onBlur={() =>
                    this.setState({ inputPlaceholder: 'Enter sound' })
                  }
                  onFocus={() => this.setState({ inputPlaceholder: '' })}
                  autoFocus={true}
                />
              </>
            ) : (
              <>
                <Prompt>すごいよ!</Prompt>
                <Button onClick={() => alert('reset')}>Start again</Button>
              </>
            )}
          </Content>
        </Wrapper>
      </>
    );
  }
}

export default Quiz;
