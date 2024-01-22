import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postContext} from '../../../context/postsContext';

export const List = () => {
  const {posts} = useContext(postContext);
  return (
    <ul className={style.list}>
      {posts.map((post) =>
        (
          <Post key={post.data.id} postData={post.data} />
        ))}
    </ul>
  );
};
