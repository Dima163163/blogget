import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {Button} from './Button/Button';
import {PostTime} from './PostTime/PostTime';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, created, thumbnail} = postData;

  return (
    <li className={style.post}>
      <PostImage title={title} urlImg={thumbnail}/>
      <PostContent title={title} author={author}/>
      <PostRating ups={ups}/>
      <Button>
        <DeleteIcon />
      </Button>
      <PostTime date={created} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
