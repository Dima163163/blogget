import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';


export const PostContent = ({title, author, id, subreddit}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          bold
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text As='a' size={12} tsize={14} color='orange'
        className={style.linkAuthor} href="#author">{author}</Text>
      {isModalOpen &&
      <Modal id={id} subreddit={subreddit}
        closeModal={() => {
          setIsModalOpen(false);
        }}/>}
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  subreddit: PropTypes.string,
};

