import React, { Component } from "react";
import styled from "@emotion/styled";
import hiragana from "../lib/hiragana";
import katakana from "../lib/katakana";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 3em;
`;

const Prompt = styled.h1`
  font-size: 8em;
  text-align: center;
`;

class Quiz extends Component {
  constructor(props) {
    super(props);

    // TODO: customize what can be tested per user
    const all = hiragana.concat(katakana).sort(() => 0.5 - Math.random());

    this.state = {
      all,
      current: all[0],
      answer: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;

    if (val === this.state.current.romaji) {
      const remainingCharacters = this.state.all.slice(1);
      return this.setState({
        all: remainingCharacters,
        current: remainingCharacters[0],
        answer: ""
      });
    }

    this.setState({ answer: val });
  }

  render() {
    const { current, answer } = this.state;

    return (
      <Wrapper>
        <Content>
          <Prompt>{current.character}</Prompt>
          <input
            type="text"
            value={answer}
            onChange={this.handleChange}
            autoFocus={true}
          />
        </Content>
      </Wrapper>
    );
  }
}

export default Quiz;
