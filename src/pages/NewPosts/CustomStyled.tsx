import styled from 'styled-components';
import { Form, Input } from 'antd';
const { TextArea } = Input;

export const InputField = styled(Form.Item)`
  margin-bottom: 1rem;
  vertical-align: middle;
`;
export const InputArea = styled(TextArea)`
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
