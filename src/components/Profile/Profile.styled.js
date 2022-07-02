import styled from '@emotion/styled'

export const Card = styled.div`
    margin: 0 auto;
    width: 400px;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.41);
    margin-top: 30px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.689);
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: gray;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const Name = styled.p`
margin-bottom: 10px;
font-size: 30px;
font-weight: 700;
`;

export const Tag = styled.p`
    margin-bottom: 8px;
    color: rgba(128, 128, 128, 0.953);
`;

export const Location = styled.p`
color: rgba(128, 128, 128, 0.953);
margin-bottom: 8px;
`;

export const StatsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.61);
    margin: 0;
    padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  width: 100%;
  :not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;

export const Label = styled.span`
  color: rgba(255, 255, 255, 0.689);
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;