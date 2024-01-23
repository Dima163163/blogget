import {PostTime} from '../../Main/List/Post/PostTime/PostTime';
import style from './Comments.module.css';
import PropTypes from 'prop-types';


export const Comments = ({comments}) => {
  console.log(style);
  console.log(comments);
  return (
    <ul className={style.list}>
      {comments.map(comment =>
        (<li key={comment.data.id} className={style.item}>
          <h3 className={style.author}>{comment.data.author}</h3>
          <p className={style.comment}>{comment.data.body}</p>
          <PostTime date={comment.data.created}/>
        </li>))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
