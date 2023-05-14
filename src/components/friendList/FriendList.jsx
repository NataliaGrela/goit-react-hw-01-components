import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friends}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.item} key={id}>
            <span
              className={css.status}
              style={{ backgroundColor: bgColor(isOnline) }}
            ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const bgColor = color => {
  switch (color) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`${color}`);
  }
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
