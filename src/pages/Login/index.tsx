import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { signin } from '../../actions/auth';
import {
  Button,
  Col,
  InputField,
  Layout,
  Row,
  TextField,
  Typography,
} from '../../utils/Style';
interface IFormInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(signin(data, navigate));
  };

  return (
    <Layout>
      <Row>
        <Col col={6} offset={3}>
          <Typography variant="h1">Sign In</Typography>
          <Typography>
            <Link to="/register">Need an account?</Link>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <InputField>
                <TextField
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="Email"
                />
                <i style={{ color: 'red' }}>{errors.email?.message}</i>
              </InputField>

              <InputField>
                <TextField
                  type="password"
                  placeholder="Password"
                  {...register('password', { required: true, minLength: 5 })}
                />
                <i style={{ color: 'red' }}>{errors.password?.message}</i>
              </InputField>

              <Button type="submit">Sign in</Button>
            </fieldset>
          </form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
