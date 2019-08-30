import styled from '@emotion/styled';

const Button = styled.button`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  padding: 1em 2em;
  height: auto;
  color: #333;
  font-weight: bold;
  font-size: inherit;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  vertical-align: middle;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translate(0, -1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

export default Button;
