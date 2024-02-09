import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
