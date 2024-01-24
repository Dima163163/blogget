import style from './Auth.module.css';
import PropsTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useContext, useState} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth({});
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
            <Text className={style.btnText}>{auth.name}</Text>
          </button>
          {showLogout && (
            <button className={style.logout} onClick={logOut}>
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
