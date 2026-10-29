import './UserInfo.scss';

export const UserInfo = ({ user: { name, email } }) => (
  <div className="UserInfo" href={`mailto:${email}`}>
    <p className="UserInfo__name">{name}</p>
  </div>
);
