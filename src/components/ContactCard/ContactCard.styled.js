import styled from 'styled-components';

export const Container = styled.section`
position: relative;
display: flex;
gap: 10px;
align-items: center;
`;

export const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 0px;
  font-size: 20px;
`;

export const Number = styled.span`
font-size:16px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 75px;
  height: 25px;
  color: #333340;
  border: 1px solid #333340;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6495ED };
`