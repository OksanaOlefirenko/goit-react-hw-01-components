import styled from 'styled-components';
import { getRandomHexColor } from 'utils/RandomHexColor';

export const Container = styled.section`
  width: 400px;
  margin: 30px auto 0 auto;
  background-color: rgba(255, 255, 255, 0.689);
  border-radius: 5px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.41);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  color: gray;
  padding: 20px 0;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  color: white;
  background-color: ${getRandomHexColor};
  width: 100%;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 20px;
`;
