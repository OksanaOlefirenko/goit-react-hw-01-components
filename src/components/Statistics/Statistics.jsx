import {
  Container,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatsList>
        {' '}
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
