import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostImage} from './PostImage/PostImage';
import {Button} from './Button/Button';
import {PostTime} from './PostTime/PostTime';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    created: data,
    thumbnail,
    id,
    subreddit,
  } = postData;

  return (
    <li className={style.post}>
      <PostImage title={title} urlImg={thumbnail}/>
      <PostContent title={title} author={author} id={id}
        subreddit={subreddit}/>
      <PostRating ups={ups}/>
      <Button>
        <DeleteIcon />
      </Button>
      <PostTime date={data} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
