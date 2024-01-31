import style from './List.module.css';
import Post from './Post';
import Preloader from '../../../UI/Preloader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/postsData/postsDataAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const postsData = useSelector(state => state.postsData.posts);
  const loading = useSelector(state => state.postsData.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log('page: ', page);
  console.log('useParams()', useParams());

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
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
      <ul className={style.list}>
        {!loading && postsData.map((post) =>
          (
            <Post key={post.data.id} postData={post.data} />
          ))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet/>
    </>
  );
};
