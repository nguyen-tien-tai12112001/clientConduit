import { Button, Col, Modal, Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deletePost, getPost } from '../../actions/posts';
import CommentSection from './CommentSection';
const { Title } = Typography;

const Banner = styled(Col)`
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
function PostDetail() {
  var storage: any = localStorage.getItem('profile');
  const { post } = useSelector((state: any) => state.posts);
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    'Do you want to delete this post?'
  );
  const isUser = user?.result?._id === post?.creator;
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location]);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('Delete......');
    setConfirmLoading(true);
    dispatch(deletePost(post._id));
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history('/');
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  if (!post) return null;

  return (
    <Row justify="center">
      <Banner xs={24} md={24} xl={24}>
        <Row justify="space-around">
          <Col xs={23} md={18} xl={20}>
            <div className="content">
              <Title style={{ color: 'white' }}>{post.title}</Title>
              <div className="article-meta">
                <a>
                  <img
                    alt=""
                    src={
                      user?.result.image
                        ? user?.result.image
                        : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
                    }
                  />
                </a>
                <div style={{ marginLeft: '4px', textAlign: 'start' }}>
                  <a className="info">{post.name}</a>
                  <Title
                    style={{ color: '#bbb', fontSize: '0.8rem' }}
                    level={5}
                  >
                    {moment(post.createdAt).format('llll')}
                  </Title>
                </div>
                {isUser ? (
                  <div style={{ marginLeft: '2rem' }}>
                    <Button
                      style={{ marginLeft: '5px' }}
                      onClick={showModal}
                      type="primary"
                      danger
                      ghost
                    >
                      <i
                        style={{ marginRight: '2px' }}
                        className="fas fa-trash-alt"
                      ></i>{' '}
                      Delete Article
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </Banner>

      <Col xs={24} md={24} xl={24}>
        <Row justify="center">
          <Col xs={23} md={18} xl={19} className="border">
            <Title
              style={{
                textAlign: 'start',
                paddingBottom: '3rem',
                marginLeft: '-15px',
              }}
              level={4}
            >
              {post.article}
            </Title>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row justify="center" style={{ marginBottom: '200px' }}>
              <Col xs={24} md={10} xl={10}>
                <CommentSection post={post} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </Row>
  );
}
export default PostDetail;
