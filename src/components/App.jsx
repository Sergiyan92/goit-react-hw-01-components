import Profile from '../components/profile/Profile';
import Statistics from '../components/statistics/Statistics';
import FriendList from '../components/friend/FriendList';
import TransactionHistory from '../components/transaction/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics key={data.id} title="Upload stats" stats={data} />
      <FriendList key={friends.id} friends={friends} />;
      <TransactionHistory key={transactions.id} items={transactions} />
    </div>
  );
};