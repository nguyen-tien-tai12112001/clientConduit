import { Avatar, Button, Comment, Tooltip, Typography } from 'antd';
import moment from 'moment';
import  { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { commentPost } from '../../actions/posts';
const { Text } = Typography;
const Form = styled.form`
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
const CommentSection: FC<any> = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile') as string);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [comments, setComments] = useState<any>(post?.comments);

  const dispatch = useDispatch();

  const handleComment = async () => {
    if (comment.trim().length > 0) {
      const newComments = await dispatch(
        commentPost(`${user?.result?.name}: ${comment}`, post._id)
      );
      setComment('');
      setComments(newComments);
    } else {
      setError('You have not entered a comment.');
    }
  };

  return (
    <>
      {comments?.map((c: any, i: number) => (
        <Comment
          key={i}
          author={<a>{user?.result?.name}</a>}
          avatar={
            <Avatar
              src={
                user?.result.image ||
                'https://api.realworld.io/images/smiley-cyrus.jpeg'
              }
            />
          }
          content={<p>{c.split(':')[1]}</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().format('llll')}</span>
            </Tooltip>
          }
        />
      ))}
      {!user ? <Text mark>Please login to comment</Text> : ''}
      <Form>
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setError('');
          }}
        ></textarea>
        <div className="footer">
          <img alt=""
            src={
              user?.result.image
                ? user?.result.image
                : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
            }
          />
          <Button
            style={{ position: 'absolute', right: '5px', bottom: '10px' }}
            type="primary"
            onClick={handleComment}
            disabled={!user ? true : false}
          >
            Post comment
          </Button>
        </div>
      </Form>
      {error.length > 0 ? <i style={{ color: 'red' }}>{error}</i> : ''}
    </>
  );
};

export default CommentSection;
