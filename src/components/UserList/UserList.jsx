import css from './UserList.module.css';
import { User } from 'components/User/User';
export const UserList = ({ users, onFollow }) => {
  const elements = users.map(user => {
    const { id, ...userprops } = user;
    return (
      <User
        key={id}
        {...userprops}
        onFollow={e =>
          onFollow(id, e.currentTarget.getAttribute('data-follow'))
        }
      />
    );
  });
  return <ul className={css.UserList}>{elements}</ul>;
};
