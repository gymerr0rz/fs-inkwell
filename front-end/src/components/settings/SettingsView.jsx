import {
  SettingsContainer,
  SettingsLinks,
  SettingsHeader,
} from '../../styles/settings/Settings.styled';
import ProfileSettings from './profile/ProfileSettings';

const SettingsPage = () => {
  return (
    <SettingsContainer>
      <SettingsHeader>
        <h1>Settings</h1>
        <p>Manage your account settings and preferences.</p>
        <SettingsLinks>
          <li>My Details</li>
          <li>Password</li>
          <li>Personalization</li>
        </SettingsLinks>
      </SettingsHeader>
      <ProfileSettings />
    </SettingsContainer>
  );
};

export default SettingsPage;
