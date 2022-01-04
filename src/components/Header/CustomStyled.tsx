import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface StyledProps {
  variant?: string;
  col?: number;
  offset?: number;
}

export const Nav = styled.div`
  float: right !important;
`;
export const NavBar = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  @media (min-width: 544px) {
    & {
      border-radius: 0.25rem;
    }
  }
`;
export const LinkBrand = styled(Link)`
  color:#5cb85c;
  &:focus,&:hover{
    color:#5cb85c;

  }
  float:left;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem}.&:focus,.&:hover{text-decoration:none};

`;
export const NavItem = styled.div`
  float: left;
  margin-left: 1rem;
`;
export const NavLink = styled(Link)`
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;

  margin-left: 1rem;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 544px) {
    & {
      max-width: 576px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 940px;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1140px;
    }
  }
  & {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

