import React, { Component } from 'react';
import styled from '@emotion/styled';

// UI elements
import { Button, ProgressBar, TextInput } from './ui';
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
  margin: 0 0 2rem 0;
  font-size: 32vmin;
  line-height: 1;
  text-align: center;
`;

class Quiz extends Component {
  static defaultProps = {
    placeholder: 'Enter sound (romaji)',
  };

  constructor(props) {
    super(props);

    const all = [...props.questions];

    this.state = {
      all,
      initialLength: all.length,
      current: all[0],
      answer: '',
      inputPlaceholder: props.placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value.trim().toLowerCase();
    const { current } = this.state;

    if (val === current.sound || val === current.romaji) {
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
    const { placeholder } = this.props;
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

export default Quiz;
