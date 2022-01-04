import { Avatar, Button, Comment, Tooltip, Typography } from 'antd';
import moment from 'moment';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';
import { Form } from './CustomStyled';
const { Text } = Typography;

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
          <img
            alt=""
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
