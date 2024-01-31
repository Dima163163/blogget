import {PostTime} from '../../Main/List/Post/PostTime/PostTime';
import style from './Comments.module.css';
import PropTypes from 'prop-types';


export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? (comments.map(comment =>
      comment.body && (<li key={comment.id} className={style.item}>
        <h3 className={style.author}>{comment.author}</h3>
        <p className={style.comment}>{comment.body}</p>
        {comment.created && <PostTime date={comment.created}/>}
      </li>))) : (<p>Нет комментариев</p>)}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
