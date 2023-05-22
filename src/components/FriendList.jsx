import Friend from './Friend';
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
export default FriendList;
