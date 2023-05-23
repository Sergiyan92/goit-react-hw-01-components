import css from './Friends.module.css';
import PropTypes from 'prop-types';
import { VscBell } from 'react-icons/vsc';
import { VscBellDot } from 'react-icons/vsc';
const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span> {isOnline ? <VscBell /> : <VscBellDot />}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
export default Friend;
Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
