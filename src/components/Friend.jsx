import css from './Friends.module.css';
const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
export default Friend;
