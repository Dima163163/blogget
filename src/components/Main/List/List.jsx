import style from './List.module.css';
import Post from './Post';
import Preloader from '../../../UI/Preloader';
import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {postsRequestAsync} from '../../../store/postsData/postsDataAction';
import {Outlet, useParams} from 'react-router-dom';
import {usePostsData} from '../../../hooks/usePostsData';

export const List = () => {
  const {page} = useParams();
  console.log('pageL: ', page);
  const [posts, loading, isLast] = usePostsData(page);
  console.log('posts: ', posts);
  const endList = useRef(null);
  console.log('endList!!!!!!!!!!!: ', endList.current);
  const dispatch = useDispatch();
  console.log('dispatch: ', dispatch);

  useEffect(() => {
    if (!endList.current || isLast) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync(page));
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
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
      {!loading && (
        <>
          <ul className={style.list}>
            {posts.length !== 0 && posts.map((post) =>
              (
                <Post key={post.data.id} postData={post.data} />
              ))}
            <li ref={endList} className={style.end}/>
          </ul>
          <Outlet/>
        </>
      )}
    </>
  );
};
