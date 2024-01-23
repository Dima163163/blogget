import {useEffect, useRef} from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
  const textareaRef = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };


  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <textarea className={style.textarea} ref={textareaRef} />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};

