import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const items = friends.map(friend => {
    return (
      <li key={friend.id}>
        <FriendListItem
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={css.list}>{items}</ul>;
};
