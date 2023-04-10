import { useEffect, useState } from 'react';
import {
  SetupContainer,
  Introduction,
  Select,
  Buttons,
} from '../../../styles/setupProfile/setup.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { Link } from 'react-router-dom';

const SetupProfile = () => {
  const [user, setUser] = useState('{User}');
  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .get('https://inkwell.onrender.com/user/getUser')
      .then((user) => {
        const data = user.data;
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {user.email_confirmed ? (
        <SetupContainer>
          <Introduction>
            <h1>
              Welcome <b>{user.username}</b>!
            </h1>
            <p>
              Personalize your account and make it easier for others to
              recognize you.
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
            <Link to="/app">
              <button>SKIP</button>
            </Link>
            <Link to="/app">
              <button>CONTINUE</button>
            </Link>
          </Buttons>
        </SetupContainer>
      ) : (
        <div>
          {!user.email_confirmed ? (
            <SetupContainer>
              <Introduction>
                <p>Confirming email address...</p>
                <p>
                  When you have confirmed the email, please refresh the site.
                </p>
              </Introduction>
            </SetupContainer>
          ) : null}
        </div>
      )}
    </>
  );
};

export default SetupProfile;
