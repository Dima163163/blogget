import {Text} from '../../../../UI/Text';
import style from './Notice.module.css';
import ReactDOM from 'react-dom';

export const Notice = () => {
  console.log(style);
  return ReactDOM.createPortal(
    <div className={style.container}>
      <Text As='h1' className={style.text}>
        Ошибка при получения данных пользователя
      </Text>
    </div>,
    document.getElementById('notice-root')
  );
};

