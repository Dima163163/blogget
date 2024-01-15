import style from './Post.module.css';
// import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
// import formatDate from '../../../../utils/formatDate';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {Button} from './Button/Button';
import {PostTime} from './PostTime/PostTime';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log('title, author, ups, date: ', title, author, ups, date);
  return (
    <li className={style.post}>
      {/* <img className={style.img} src={notphoto} alt={title} /> */}
      <PostImage title={title} />
      <PostContent title={title} author={author}/>
      {/* <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href="#">
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div> */}
      <Button>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.4375 4.3125H8.25C8.35313 4.3125 8.4375 4.22813 8.4375
            4.125V4.3125H15.5625V4.125C15.5625 4.22813 15.6469 4.3125 15.75
            4.3125H15.5625V6H17.25V4.125C17.25 3.29766 16.5773 2.625 15.75
            2.625H8.25C7.42266 2.625 6.75 3.29766 6.75
            4.125V6H8.4375V4.3125ZM20.25 6H3.75C3.33516 6 3 6.33516 3
            6.75V7.5C3 7.60313 3.08437 7.6875 3.1875 7.6875H4.60312L5.18203
            19.9453C5.21953 20.7445 5.88047 21.375 6.67969
            21.375H17.3203C18.1219 21.375 18.7805 20.7469 18.818
            19.9453L19.3969 7.6875H20.8125C20.9156 7.6875 21 7.60313 21
            7.5V6.75C21 6.33516 20.6648 6 20.25 6ZM17.1398
            19.6875H6.86016L6.29297 7.6875H17.707L17.1398 19.6875Z'
            fill='currentColor'
          />
        </svg>
      </Button>
      <PostRating ups={ups}/>
      {/* <div className={style.rating}>
        <button className={style.up}
          aria-label="Увеличить рейтинг" />
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label="Понизить рейтинг" />
      </div> */}
      {/* <time className={style.date}
      dateTime={date}>{formatDate(date)}</time> */}
      <PostTime date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
