import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';


export const PostImage = ({title, urlImg}) => {
  const url = urlImg.replace(/\?.*$/, '');
  return (<img
    className={style.img} src={url ? url : notphoto} alt={title}
  />);
};

PostImage.propTypes = {
  title: PropTypes.string,
  urlImg: PropTypes.string,
};
