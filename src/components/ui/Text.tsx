import styled from '@emotion/styled';

interface TextProps {
  readonly margin?: string;
}

const Text = styled.p<TextProps>`
  font-size: 1.15em;
  margin: ${({ margin }) => margin || '1em'};
  line-height: 1.4;
`;

export default Text;
