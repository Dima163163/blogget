import style from './Heading.module.css';
import PropsTypes from 'prop-types';

export const Heading = ({text}) => <h1 className={style.heading}>{text}</h1>;

Heading.propTypes = {
  text: PropsTypes.string
};
