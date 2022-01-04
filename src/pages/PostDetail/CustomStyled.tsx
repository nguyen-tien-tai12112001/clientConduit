import {  Col} from 'antd';
import styled from 'styled-components';

export const Form = styled.form`
border: 1px solid #e5e5e5;
border-radius: 0.25rem;
margin-bottom: 1rem;
textarea {
  border: 0;
  padding: 1.25rem;
  width: 100%;
  color: #55595c;
  border-radius: 0.25rem;
  min-height: 9rem;
}
.footer {
  background-color: #f5f5f5;
  height: 50px;
  position: relative;
  img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
    position: absolute;
    left: 8px;
    bottom: 10px;
  }
}
`;

export const Banner = styled(Col)`
  background: #333;
  padding: 1rem;
  margin-bottom: 2rem;
  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
  }
  .info {
    color: #fff;
    font-size: 1.2rem;
    display: block;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
  .footer img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
    position: absolute;
    left: 8px;
    bottom: 10px;
  }
`;
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
