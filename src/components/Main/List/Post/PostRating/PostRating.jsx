import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up}
      aria-label="Увеличить рейтинг" />
    <Text As='p' className={style.ups}>{ups}</Text>
    <button className={style.down} aria-label="Понизить рейтинг" />
  </div>
);


PostRating.propTypes = {
  ups: PropTypes.number,
};
