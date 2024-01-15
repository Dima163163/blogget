import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';


export const PostImage = ({title}) => <img
  className={style.img} src={notphoto} alt={title}
/>;

PostImage.propTypes = {
  title: PropTypes.string,
};
