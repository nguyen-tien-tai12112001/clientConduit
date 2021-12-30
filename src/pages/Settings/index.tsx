import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { updateProfile } from '../../actions/auth';
import {
  Button,
  Col,
  InputField,
  Layout,
  Row,
  TextField,
  Typography,
} from '../../utils/Style';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;

  &:focus {
    border-color: #66afe9;
    outline: none;
  }
  &::placeholder {
    color: #999;
    opacity: 1;
  }
`;
const Setting = () => {
  var storage: any = localStorage.getItem('profile');
  const data = useSelector((state: any) => state.auth.authData?.result);

  const [user, setUser] = useState<any>(JSON.parse(storage));
  console.log('🚀 ~ file: index.tsx ~ line 14 ~ Setting ~ user', user);
  const [picture, setPicture] = useState(
    user ? user?.result?.image || data?.image : ''
  );
  const [name, setName] = useState(
    user ? user?.result?.name || data?.name : ''
  );
  const [bio, setBio] = useState(user ? user?.result?.bio || data?.bio : '');
  const [email, setEmail] = useState(
    user ? user?.result?.email || data?.email : ''
  );
  const [password, setPassword] = useState(
    user ? user?.result?.password || data?.password : ''
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location]);

  const handlePicture = (e: any) => {
    setPicture(e.target.value);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleBio = (e: any) => {
    setBio(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleUpdateProfile = (e: any) => {
    e.preventDefault();
    if (name === '' || email === '' || picture === '') {
      setName(data?.name);
      setEmail(data?.email);
      setPicture(data?.image);
    }
    const values = {
      email,
      newpassword: password,
      username: name,
      url: picture,
      about: bio,
    };
    dispatch(updateProfile(values, user.result._id, navigate));
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Layout style={{height:"660px"}}>
      <Row>
        <Col col={6} offset={3}>
          <Typography variant="h1">Your Settings</Typography>

          <form onSubmit={handleUpdateProfile}>
            <fieldset>
              <InputField>
                <TextField
                  type="text"
                  name="url"
                  placeholder="URL of profile picture"
                  value={picture || 'https://picsum.photos/536/354'}
                  onChange={handlePicture}
                />
              </InputField>

              <InputField>
                <TextField
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={name}
                  onChange={handleName}
                />
              </InputField>

              <InputField>
                <TextArea
                  placeholder="Short bio about you"
                  value={bio}
                  name="about"
                  onChange={handleBio}
                ></TextArea>
              </InputField>

              <InputField>
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
              </InputField>

              <InputField>
                <TextField
                  type="password"
                  name="newpassword"
                  placeholder="New Password"
                  value={password}
                  onChange={handlePassword}
                />
              </InputField>

              <Button type="submit">Update Settings</Button>
            </fieldset>
          </form>

          <hr />

          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Or click here to logout.
          </button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Setting;
