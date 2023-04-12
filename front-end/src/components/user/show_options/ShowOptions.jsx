import { LogOut, User } from 'lucide-react';
import { SettingsOptions } from '../../../styles/options/Options.styled';
import { useSignOut } from 'react-auth-kit';

const ShowOptions = (options) => {
  const signOut = useSignOut();
  const handleTrash = () => {
    signOut();
    window.location.reload();
  };

  const handleView = () => {
    console.log(options);
    window.location.assign(
      `http://localhost:3000/app/users?id=${encodeURIComponent(options.user)}`
    );
  };

  return (
    <SettingsOptions>
      <li className="profile">
        <button className="profile" onClick={handleView}>
          View Profile <User />
        </button>
      </li>
      <li className="logout">
        <button className="trash" onClick={handleTrash}>
          Log Out <LogOut />
        </button>
      </li>
    </SettingsOptions>
  );
};

export default ShowOptions;
