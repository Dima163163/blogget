import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {Button} from './Button/Button';
import {PostTime} from './PostTime/PostTime';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log('title, author, ups, date: ', title, author, ups, date);
  return (
    <li className={style.post}>
      <PostImage title={title} />
      <PostContent title={title} author={author}/>
      <PostRating ups={ups}/>
      <Button>
        <DeleteIcon />
      </Button>
      <PostTime date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
