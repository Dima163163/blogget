import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';
import {Text} from '../../UI/Text';
import Preloader from '../../UI/Preloader';
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const overlayRef = useRef(null);
  const buttonCloseRef = useRef(null);
  const [postData, commentsData, status] = useCommentsData(id);


  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current || e.key === 'Escape') {
      navigate(`/category/${page}`);
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
        {status === 'loading' && (
          <div className={style.preloaderContainer}>
            <Preloader css={{
              'display': 'block',
            }}
            size={90}/>
          </div>
        )}
        {status === 'error' && (<Text As='h2' className={style.title}
          size={22} tsize={24}>
        Ошибка при загрузке
        </Text>)}
        {status === 'loaded' && (<>
          <Text As='h2' className={style.title} size={22} tsize={24}>
            {postData.title}
          </Text>
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
              {postData.selftext ? postData.selftext : ''}
            </Markdown>
          </div>
          <p className={style.author}>{postData.author}</p>
          {(!isVisibleForm && status === 'loaded') &&
          <button className={style.btn}
            onClick={() =>
              setIsVisibleForm(true)}>Написать комментарий</button>}
          {isVisibleForm && <FormComment/>}
          <Comments comments={commentsData}/>
        </>)}
        <button className={style.close} ref={buttonCloseRef}
          onClick={() => navigate(`/category/${page}`)}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
  subreddit: PropTypes.string,
};
