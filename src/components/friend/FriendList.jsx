import PropTypes from 'prop-types';
import Friend from './Friend';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend}>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
