import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import {useState} from 'react';


export const PostImage = ({title, urlImg}) => {
  const url = urlImg.replace(/\?.*$/, '');
  const [flag, setFlag] = useState(false);

  const checkImgSrc = src => {
    const img = new Image();
    img.src = src;
    img.onload = () => setFlag(true);
    img.onerror = () => setFlag(false);
  };

  checkImgSrc(url);
  return (<img
    className={style.img} src={flag ? url : notphoto} alt={title}
  />);
};

PostImage.propTypes = {
  title: PropTypes.string,
  urlImg: PropTypes.string,
};
