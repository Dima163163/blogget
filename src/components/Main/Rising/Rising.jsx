import {Text} from '../../../UI/Text';
import style from './Rising.module.css';

export const Rising = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <Text className={style.title} As='h1' size={40} tsize={50}
        fontWeight='bold' center>Стартовая страница</Text>
      <Text className={style.subtitle}
        As='h2' size={30} tsize={40} center>Добро пожаловать!</Text>
      <Text className={style.text}
        As='p' size={15} tsize={20} center>Выберите категорию</Text>
    </div>
  );
};

