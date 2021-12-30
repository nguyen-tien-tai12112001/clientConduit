import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Col, Layout, Row } from '../../utils/Style';
import Post from './Post';
const Posts = () => {
  const { posts, isLoading } = useSelector((state: any) => state.posts);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ Posts ~ posts', posts);

  return (
    <Layout>
      <Row>
        <Col col={9}>
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link active mt-10"
                style={{ position: 'relative', top: '15px' }}
              >
                Global Feed
              </a>
            </li>
          </ul>

          {isLoading ? (
            <Spin size="large" style={{ marginTop: '30px' }} />
          ) : (
            <div>
              {posts?.map((post: any, i: number) => (
                <Post post={post} key={i} />
              ))}
            </div>
          )}
        </Col>
        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>
          </div>
        </div>
      </Row>
    </Layout>
  );
};

export default Posts;
