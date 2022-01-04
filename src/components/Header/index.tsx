import { Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LinkBrand, Nav, NavBar, NavItem, NavLink } from './CustomStyled';
const LoggedOutView = (props: any) => {
  if (!props.currentUser) {
    return (
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/login">Sign in</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/register">Sign up</NavLink>
        </NavItem>
      </Nav>
    );
  }
  return null;
};

const LoggedInView = (props: any) => {
  if (props.currentUser) {
    return (
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/posts">
            <i className="ion-compose"></i>&nbsp;New Post
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/setting">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/profile">
            <Avatar
              src={
                props.currentUser
                  ? props.currentUser?.result.image
                  : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
              }
              style={{ width: 30, height: 30 }}
            />{' '}
            {'   '}
            {props.currentUser?.result.name}
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  return null;
};

const HeaderComponents = () => {
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  console.log('🚀 ~ file: index.tsx ~ line 98 ~ HeaderComponents ~ user', user);

  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location, setUser]);

  return (
    <NavBar>
      <Container>
        <LinkBrand to="/">conduit</LinkBrand>

        <LoggedOutView currentUser={user} />

        <LoggedInView currentUser={user} />
      </Container>
    </NavBar>
  );
};

export default HeaderComponents;
