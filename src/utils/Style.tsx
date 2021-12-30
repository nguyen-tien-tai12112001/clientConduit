import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface StyledProps {
  variant?: string;
  col?: number;
  offset?: number;
}
export const Layout = styled.div`
  margin-top: 1.5rem;
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
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;
export const Col = styled.div`
  /* col-md-6 */
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0
    ${(props: StyledProps) => {
      if (props.col === 6) {
        return '50%';
      }
      if (props.col === 10) {
        return '83.33333%';
      }
      if (props.col === 9) {
        return '75%';
      }
    }};
  max-width: ${(props: StyledProps) => {
    if (props.col === 6) {
      return '50%';
    }
    if (props.col === 10) {
      return '83.33333%';
    }
    if (props.col === 9) {
        return '75%';
      }
  }};
  /* offset-md-3 */
  margin-left: ${(props: StyledProps) => {
    if (props.offset === 3) {
      return '25%';
    }
    if (props.offset === 1) {
      return '8.33333%';
    }
  }};
  /* col-xs-12 */
  /* position:relative;
  min-height:1px;
  padding-right:15px;
  padding-left:15px;
  flex:0 0 100%;
  max-width:100%; */
  /* col-md-10 */
  /* flex:0 0 83.33333%;
  max-width:83.33333%; */
`;
export const Typography = styled.p`
  margin-bottom: 0.3em;
  text-align: center !important;
  font-size: ${(props: StyledProps) =>
    props.variant === 'h1' ? '40px' : '14px'};
  font-weight: ${(props: StyledProps) => (props.variant === 'h1' ? 500 : 400)};
`;
export const TextField = styled.input`
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
export const InputField = styled.div`
  margin-bottom: 1rem;
  vertical-align: middle;
`;
export const Button = styled.button`
  float: right !important;
  color: #fff;
  background-color: #5cb85c;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;

  &:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
    border: none;
  }
  &:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
    border: none;
  }
`;
export const Nav = styled.div`
float:right!important;

`
export const NavBar = styled.div`
    
    position:relative;padding:.5rem 1rem;
  &::after{content:"";display:table;clear:both}@media(min-width:544px){&{border-radius:.25rem}}


`
export const LinkBrand = styled(Link)`
  color:#5cb85c;
  &:focus,&:hover{
    color:#5cb85c;

  }
  float:left;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem}.&:focus,.&:hover{text-decoration:none};

`
export const NavItem = styled.div`
  float:left;
  margin-left:1rem;
  


`
export const NavLink = styled(Link)`
  display:block;padding-top:.425rem;padding-bottom:.425rem;
  
    margin-left:1rem;
  
`;
export const Container = styled.div`
margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;
@media(min-width:544px){&{max-width:576px}}@media(min-width:768px){&{max-width:720px}}@media(min-width:992px){&{max-width:940px}}@media(min-width:1200px){&{max-width:1140px}}&{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}
`

export const ArticlePreview = styled.div`
border-top: 1px solid rgba(0,0,0,.1);
  padding: 1.5rem 0;
  position: relative;
  margin-top: 14px;
  .article-meta{display:block;position:relative;font-weight:300}.article-meta img{display:inline-block;vertical-align:middle;height:32px;width:32px;border-radius:30px}.article-meta .info{margin:0 1.5rem 0 .3rem;display:inline-block;vertical-align:middle;line-height:1rem}.article-meta .info .author{display:block;font-weight:500!important}.article-meta .info .date{color:#bbb;font-size:.8rem;display:block}.article-preview{border-top:1px solid rgba(0,0,0,.1);padding:1.5rem 0}.article-preview .article-meta{margin:0 0 1rem}



`