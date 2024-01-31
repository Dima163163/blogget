import {Text} from '../../../UI/Text';
import style from './NotFound.module.css';

export const NotFound = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <Text As='h1' size={50} tsize={60}
        center className={style.title}>404</Text>
    </div>
  );
};

