import styled from 'styled-components';

export const Wrapper = styled('div')`
  margin-top: 10px;
`;

export const List = styled('ul')``;

export const Item = styled('li')`
  margin-top: 8px;
`;

export const Total = styled('p')`
  font-size: 24px;
  margin-top: 15px;
`;

export const Percentage = styled('p')`
  margin-top: 8px;
  font-size: 24px;
`;

export const StyledStat = styled('p')`
  font-size: 24px;
  color: black;
`;

export const Label = styled('span')`
  display: inline-block;
  font-weight: 400;
  color: black;

  &::first-letter {
    text-transform: uppercase;
  }
`;
