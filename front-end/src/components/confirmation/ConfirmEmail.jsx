import { useEffect, useState } from 'react';
import { ConfirmContainer } from '../../styles/confirmation/Confirm.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';

const ConfirmEmail = () => {
  return (
    <ConfirmContainer>
      <h1>
        Please confirm your email. <a>Send Request!</a>
      </h1>
    </ConfirmContainer>
  );
};

export default ConfirmEmail;
