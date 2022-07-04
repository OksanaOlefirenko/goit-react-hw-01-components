import { Container } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
