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

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: #666;
  background-color: #f5f5f5;
  border: 0;
  outline: 0;
`;

const Button = styled.button`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  padding: 1em 2em;
  height: auto;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  vertical-align: middle;
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
          {current ? (
            <>
              <Prompt>{current.character}</Prompt>
              <Input
                type="text"
                value={answer}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </>
          ) : (
            <>
              <Prompt>すごいよ!</Prompt>
              <Button onClick={() => alert("reset")}>Start again</Button>
            </>
          )}
        </Content>
      </Wrapper>
    );
  }
}

export default Quiz;
