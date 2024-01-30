
import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const [postsData, loading] = useBestPosts();
  console.log('postsData, status: ', postsData, status);
  return (
    <>

      {loading && (
        <div className={style.preloaderContainer}>
          <Preloader css={{
            'display': 'block',
          }}
          size={90}/>
        </div>
      )}
      <ul className={style.list}>
        {!loading && postsData.map((post) =>
          (
            <Post key={post.data.id} postData={post.data} />
          ))}
      </ul>
    </>
  );
};
