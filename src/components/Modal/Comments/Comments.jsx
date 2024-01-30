import {PostTime} from '../../Main/List/Post/PostTime/PostTime';
import style from './Comments.module.css';
import PropTypes from 'prop-types';


export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments && comments.map(comment =>
      (<li key={comment.id} className={style.item}>
        <h3 className={style.author}>{comment.author}</h3>
        <p className={style.comment}>{comment.body}</p>
        {comment.created && <PostTime date={comment.created}/>}
      </li>))}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
