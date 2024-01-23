import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../UI/Text';
import FormComment from './FormComment';
import Comments from './Comments';


export const Modal = ({id, closeModal, subreddit}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const overlayRef = useRef(null);
  const buttonCloseRef = useRef(null);
  const [comments, post, loading] = useCommentsData(id, subreddit);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current || e.key === 'Escape' ||
    target.closest('button') === buttonCloseRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{post.title}</h2>

        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            }
          }}>
            {post.markdown ? post.markdown : ''}
          </Markdown>
        </div>
        {loading && <Text As="p">Загрузка...</Text>}
        <p className={style.author}>{post.author}</p>
        {!isVisibleForm && <button className={style.btn}
          onClick={() => setIsVisibleForm(true)}>Написать комментарий</button>}
        {isVisibleForm && <FormComment/>}
        <Comments comments={comments}/>

        <button className={style.close} ref={buttonCloseRef}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  subreddit: PropTypes.string,
};
