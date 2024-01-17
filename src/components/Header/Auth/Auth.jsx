import style from './Auth.module.css';
import PropsTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
// import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useAuth({}, token, delToken);
  const [buttonClose, setButtonClose] = useState(false);

  const addCloseButtonHandler = () => {
    setButtonClose(true);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={() => addCloseButtonHandler()}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
            <Text className={style.btnText}>{auth.name}</Text>
          </button>
          {buttonClose && (
            <button className={style.logout} onClick={() => {
              delToken();
              setAuth({});
            }}>
              Выйти
            </button>
          )}
        </>
      ) :
        (
          <Text className={style.authLink} As='a' href={urlAuth}>
            <LoginIcon className={style.svg}/>
          </Text>
        )}
    </div>
  );
};

Auth.propTypes = {
  token: PropsTypes.string,
  delToken: PropsTypes.func,
};
