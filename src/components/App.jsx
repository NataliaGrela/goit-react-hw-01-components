import { Profile } from './profile/Profile';
import user from '../data/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
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
        background: 'lightGrey',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
