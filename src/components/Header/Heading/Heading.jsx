import style from './Heading.module.css';
import PropsTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Heading = ({text}) =>
  <Text
    As='h1' size={22} tsize={26} center
    fontWeight='bold' className={style.heading}>
    {text}
  </Text>;

Heading.propTypes = {
  text: PropsTypes.string
};
