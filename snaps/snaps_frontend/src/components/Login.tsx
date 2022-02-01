import React from 'react';
import GoogleLogin from 'react-google-login'; 
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../../assets/share.mp4';
import logo from '../assets/logo.png';

const login = () => {
 return ( 
    <div>
      Login
      {logo}
    </div>
    );
};

export default login;
