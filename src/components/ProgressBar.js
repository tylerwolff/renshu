import styled from '@emotion/styled';

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5vmin;
  width: ${({ progress }) => progress + '%'};
  background: #b19cd9;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  transition: width 0.15s ease-in-out;
`;

export default ProgressBar;
