import styled from 'styled-components';

export const Table = styled.table`
  margin: 30px auto 20px auto;
  width: 400px;
  border-radius: 5px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.41);
`;

export const Head = styled.thead`
  background-color: blue;
  color: white;
  height: 40px;
  text-transform: uppercase;
`;

export const TransactionItem = styled.tr`
  padding: 10px 0;
  height: 30px;
  background-color: white;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
