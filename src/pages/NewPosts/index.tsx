import { Form } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';
import { Button, Col, InputArea, InputField, Layout, Row, TextField } from './CustomStyled';

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: [],
    about: '',
  });

  const [currentId, setCurrentId] = useState(
    localStorage.getItem('currentId') as string
  );
  const post = useSelector((state: any) =>
    currentId
      ? state?.posts.posts.find((message: any) => message._id === currentId)
      : null
  );
  const user = JSON.parse(localStorage.getItem('profile') as string);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate: any = useNavigate();

  useEffect(() => {
    setCurrentId(localStorage.getItem('currentId') as string);
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post, location]);

  const clear = () => {
    setCurrentId('0');
    setPostData({ title: '', message: '', tags: [], about: '' });
  };

  const onFinish = (values: any) => {
    if (currentId === '0') {
      if (!values.title || !values.about || !values.article) return;
      dispatch(
        createPost(
          { ...values, name: user?.result?.name, image: user?.result?.image },
          navigate
        )
      );
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  return (
    <Layout>
      <Row>
        <Col offset={1} col={10}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <InputField
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <TextField placeholder="Article Title" />
            </InputField>
            <InputField
              name="about"
              rules={[{ required: true, message: 'Please input your about!' }]}
            >
              <TextField placeholder="What's this article about?" />
            </InputField>
            <InputField
              name="article"
              rules={[
                { required: true, message: 'Please input your article!' },
              ]}
            >
              <InputArea
                rows={3}
                className="form-control"
                placeholder="Write your article(in markdown)"
              />
            </InputField>
            <InputField
              name="tag"
              rules={[{ required: true, message: 'Please input your tag!' }]}
            >
              <TextField placeholder="Enter tag" />
            </InputField>

            <Button type="submit">Publish Article</Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default NewPost;
