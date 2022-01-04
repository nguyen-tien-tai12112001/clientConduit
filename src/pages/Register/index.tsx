import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { signup } from '../../actions/auth';
import {
  Button,
  Col,
  InputField,
  Layout,
  Row,
  TextField,
  Typography,
} from './CustomStyled';
interface IFormInput {
  email: string;
  password: string;
  username: string;
}
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
  })
  .required();

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(signup(data, navigate));
  };

  return (
    <Layout>
      <Row>
        <Col col={6} offset={3}>
          <Typography variant="h1">Sign Up</Typography>
          <Typography>
            <Link to="/login">Have an account?</Link>
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <InputField>
                <TextField
                  type="text"
                  placeholder="Username"
                  {...register('username', {
                    pattern: /^[A-Za-z]+$/i,
                    required: true,
                  })}
                />
                <i style={{ color: 'red' }}>{errors.username?.message}</i>
              </InputField>

              <InputField>
                <TextField
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
                <i style={{ color: 'red' }}>{errors.email?.message}</i>
              </InputField>

              <InputField>
                <TextField
                  type="password"
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
                <i style={{ color: 'red' }}>{errors.password?.message}</i>
              </InputField>

              <Button type="submit">Sign up</Button>
            </fieldset>
          </form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Register;
