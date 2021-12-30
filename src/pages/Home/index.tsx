import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Posts } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);
  return (
    
      <Posts />
    
  );
};

export default Home;
