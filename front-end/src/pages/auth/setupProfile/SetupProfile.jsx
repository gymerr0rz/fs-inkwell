import { useEffect, useState } from 'react';
import {
  SetupContainer,
  Introduction,
  Select,
  Buttons,
} from '../../../styles/setupProfile/setup.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';

const SetupProfile = () => {
  const [user, setUser] = useState(null);
  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getUser').then((user) => {
      const data = user.data;
      setUser(data);
    });
  }, [header]);

  return (
    <>
      <SetupContainer>
        <Introduction>
          <h1>
            Welcome <b>{user.username}</b>!
          </h1>
          <p>
            Personalize your account and make it easier for others to recognize
            you.
          </p>
        </Introduction>
        <Select>
          <div className="container">
            <div className="profileimage">
              <label for="files">Select Profile Image</label>
              <input type="file" name="" id="files" />
            </div>
            <div className="profilebanner">
              <label for="files">Select Banner Image</label>
              <input type="file" name="" id="file" />
            </div>
          </div>
          <textarea placeholder="Describe yourself here..." />
        </Select>
        <Buttons>
          <button>SKIP</button>
          <button>CONTINUE</button>
        </Buttons>
      </SetupContainer>
    </>
  );
};

export default SetupProfile;
