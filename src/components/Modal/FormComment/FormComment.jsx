import {useContext} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  console.log('value : ', value);
  const {auth} = useContext(authContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea className={style.textarea}
        value={value} onChange={e => handleChange(e)} />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};

