import { LogOut } from 'lucide-react';
import { useState } from 'react';
import { SettingsOptions } from '../../../styles/options/Options.styled';
import { useAuthHeader, useSignOut } from 'react-auth-kit';

const ShowOptions = (options) => {
  const signOut = useSignOut();
  const handleTrash = () => {
    signOut();
    window.location.reload();
  };

  return (
    <SettingsOptions>
      <li>
        <button className="trash" onClick={handleTrash}>
          Log Out <LogOut />
        </button>
      </li>
    </SettingsOptions>
  );
};

export default ShowOptions;
