import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.689);
  border-radius: 5px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.41);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 15px;
  width: 50px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
`;
