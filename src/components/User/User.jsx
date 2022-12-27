import css from './User.module.css';
import logo from '../../img/Logo.svg';

export const User = props => {
  const { user, tweets, followers, avatar, isFollowing, onFollow } = props;
  const followersCount = isFollowing ? followers + 1 : followers;

  const followersNumber =
    String(followersCount).slice(0, 3) + ',' + String(followersCount).slice(3);
  return (
    <li className={css.Card}>
      <div className={css.Logo}>
        <img src={logo} alt="goit logo" />
      </div>
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.UserAvatar}>
          <img src={avatar} alt={user} className={css.UserImage} />
        </div>
        <p className={css.UserText}>{user}</p>
        <p className={css.UserText}>{tweets} tweets</p>
        <p className={css.UserText}>{followersNumber} followers</p>
        <button
          className={isFollowing ? css.Active : css.Button}
          type="button"
          aria-label="following button"
          onClick={onFollow}
          data-follow="isFollowing"
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};
